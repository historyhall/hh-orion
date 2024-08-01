import {ChangeEvent, DragEvent, useRef, useState} from 'react';
import {
	Button,
	Grid,
	GridColumn,
	GridRow,
	Header,
	Icon,
	Segment,
	HeaderSubheader,
	CardGroup,
	Card,
	CardDescription,
	Divider,
} from 'semantic-ui-react';

enum FileStatusEnum {
	Pending = 'Pending',
	Success = 'Success',
	Failure = 'Failure',
	Duplicate = 'Duplicate',
	Uploading = 'Uploading',
}

type Upload = {
	status: FileStatusEnum;
	file: File;
};

export function Upload() {
	const [uploads, setUploads] = useState<Upload[]>([]);
	const [highlight, setHighlight] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const maxDocUploadSizeMb = 15;

	function cardColor(status: FileStatusEnum) {
		switch (status) {
			case FileStatusEnum.Pending:
				return undefined;
			case FileStatusEnum.Success:
				return 'green';
			case FileStatusEnum.Failure:
				return 'red';
			case FileStatusEnum.Duplicate:
				return 'orange';
			case FileStatusEnum.Uploading:
				return 'teal';
			default:
				return undefined;
		}
	}

	function fileListToArray(list: FileList) {
		const array: File[] = [];
		for (let i = 0; i < list.length; i++) {
			array.push(list[i]);
		}
		return array;
	}

	function addFilesToUploadList(files: File[]) {
		const deDuplicatedFiles = files.filter(fileToUpload => !uploads.some(upload => upload.file.name === fileToUpload.name));
		const filesAndUploads = uploads.concat(
			deDuplicatedFiles.map(file => {
				return {file, status: FileStatusEnum.Pending};
			}),
		);
		setUploads(filesAndUploads);
	}

	function onFilesAdded(event: ChangeEvent<HTMLInputElement>) {
		if (event.target.files) {
			addFilesToUploadList(fileListToArray(event.target.files));
		}
	}

	function onDrop(event: DragEvent<HTMLDivElement>) {
		event.preventDefault();

		if (disabled) return;

		if (event.dataTransfer) {
			addFilesToUploadList(fileListToArray(event.dataTransfer.files));
			setHighlight(false);
		}
	}

	function onDragOver(event: DragEvent<HTMLDivElement>) {
		event.preventDefault();

		if (disabled) return;

		setHighlight(true);
	}

	function onDragLeave() {
		setHighlight(false);
	}

	function openFileDialog() {
		if (!disabled) fileInputRef.current?.click();
	}

	async function submitFiles() {
		setDisabled(true);
		await Promise.all(
			uploads.map((upload, index) => async () => {
				const currentFile = uploads;
				if (upload.file.size > maxDocUploadSizeMb * 1048576) {
					currentFile[index].status = FileStatusEnum.Failure;
					setUploads([...currentFile]);
				} else if (upload.status === FileStatusEnum.Pending) {
					currentFile[index].status = FileStatusEnum.Uploading;
					setUploads([...currentFile]);

					const formData = new FormData();
					formData.append('file', upload.file);

					try {
						const response = await fetch('test', {
							method: 'POST',
							mode: 'cors',
							credentials: 'include',
							body: formData,
						});

						if (response.status === 200) {
							currentFile[index].status = FileStatusEnum.Success;
							setUploads([...currentFile]);
						} else if (response.status === 522) {
							currentFile[index].status = FileStatusEnum.Duplicate;
							setUploads([...currentFile]);
						} else {
							currentFile[index].status = FileStatusEnum.Failure;
							setUploads([...currentFile]);
						}
					} catch {
						currentFile[index].status = FileStatusEnum.Failure;
						setUploads([...currentFile]);
					}
				}
			}),
		);
		setDisabled(false);
	}

	return (
		<Grid>
			<GridRow>
				<GridColumn>
					<Segment
						placeholder
						disabled={disabled}
						role="button"
						tabIndex={0}
						onDragOver={onDragOver}
						onDragLeave={onDragLeave}
						onDrop={onDrop}
						onClick={openFileDialog}
						onKeyDown={openFileDialog}
						style={{backgroundColor: highlight ? '#e0e1e2' : undefined}}
					>
						<Header icon size="medium">
							<Icon name="upload" />
							Upload Documents
							<HeaderSubheader>Max File Size: {maxDocUploadSizeMb}mb.</HeaderSubheader>
						</Header>
						<input
							style={{display: 'none'}}
							ref={fileInputRef}
							type="file"
							multiple={true}
							onChange={onFilesAdded}
							accept=".pdf, .jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff, .heic, .avif"
						/>
					</Segment>
				</GridColumn>
			</GridRow>
			<GridRow>
				<GridColumn>
					<CardGroup>
						{uploads.map(upload => {
							return (
								<Card key={upload.file.name} color={cardColor(upload.status)}>
									<Card.Content>
										<CardDescription>
											<Icon name="file" color={cardColor(upload.status)} size="large" />
											<Icon
												style={{cursor: 'pointer', float: 'right'}}
												name="delete"
												onClick={() => setUploads(uploads.filter(currentFiles => currentFiles.file.name !== upload.file.name))}
												color="red"
											/>
											{upload.file.name}
										</CardDescription>
										<Divider />
										<CardDescription>
											<Card.Meta>{upload.status}</Card.Meta>
										</CardDescription>
									</Card.Content>
								</Card>
							);
						})}
					</CardGroup>
				</GridColumn>
			</GridRow>
			<GridRow>
				<GridColumn>
					<Button type="button" fluid onClick={submitFiles}>
						Submit
					</Button>
				</GridColumn>
			</GridRow>
		</Grid>
	);
}
