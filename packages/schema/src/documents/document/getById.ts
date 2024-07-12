type Document = {authors: {id: string, firstName: string, lastName: string, organization: string}[], name: string, version: number, createdAt: string, bytes: number, storagePath: string, filename: string, content: string}
export type response = Document;
export const route = 'document/get-by-id';