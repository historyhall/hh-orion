import {Migration} from '../types';

export const m20240724b: Migration = {
	name: 'm20240724b',
	action: `
		BEGIN;
			UPDATE document SET location_id='894bc2d7-1817-47dd-bee0-1e2f3c06bf43' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='378e2646-da15-47b1-8b9e-17d9d66e0a6e' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='341a0c23-23d1-4587-87c2-4f5acf9eb9c6' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='6416814c-5fc9-4f61-b788-8b2d4172d29a' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='5023443e-af2a-46e8-ac14-98d7e40c031c' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='39fcc4fc-6e96-4473-9e38-426cea559b21' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='43954cfc-aa01-45b3-8191-75c30f76b4a4' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='0e8b5d92-5431-45ad-9638-c2b3d7aacfc0' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='5482179f-5ed7-4850-87bd-181bdc26bd86' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='35c18d75-94d5-4c50-bce4-f4733fd741e6' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='d8a73c01-8bd2-40c8-8d19-1a5e25b8525f' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='5b2a55ba-9b02-4bb8-a47a-8a7b967848e3' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='005fd87a-8b66-482a-b6d0-d65df3fe71e6' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='d87d7309-c7ce-49c1-a382-b313dc2378c3' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='688c8a6e-77bc-424f-af7d-f28946671ae8' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='2c2d906f-d0ce-49a5-b0ef-8116060653ff' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='d6c499c7-f03c-41b8-8566-0a12e283ade9' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='cbef3b8b-c781-45f5-aa9d-bd355219b95f' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='e9720a1e-5da9-4292-9232-f160cf400a64' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='f9ef79e9-f326-489f-aedb-df0844dc22ac' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='f22a3eed-7063-4b79-9ec5-1d0188fbff3a' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='13fc05af-d0ac-4f74-8471-6dc159993318' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='e617fe23-7bdb-454b-82fa-7a1c2d0bcb67' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='d5165341-a2a8-4d23-91ff-e55881f8eab1' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='dd36ac85-3b71-46e6-9dfe-6e03e62bd0e0' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='67163cd3-601c-4892-9669-f15f109f0ebe' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='26fe3f1b-aa9a-4ebe-a126-5d68f7d81f4d' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='a6861f29-53da-4c39-950c-08631cd99129' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			UPDATE document SET location_id='1d78d9f8-ddd9-453e-8f98-8dee9a65d604' WHERE CTID IN (SELECT CTID FROM document WHERE location_id is null LIMIT 1);
			
			alter table "document" alter column "location_id" set not null;
		COMMIT;
	`,
};
