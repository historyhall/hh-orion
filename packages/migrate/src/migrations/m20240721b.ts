import {Migration} from '../types';

const countries: {id: string; name: string; code: string}[] = [
	{id: 'cbfdd88e-9e68-4292-9502-3e0cf48b09c0', name: 'Afghanistan', code: 'af'},
	{id: '5c879293-0f0e-4349-bff0-4bd03cfefe15', name: 'Aland Islands', code: 'ax'},
	{id: '4f212a1c-d811-48ce-8f90-2060e34a66a7', name: 'Albania', code: 'al'},
	{id: '88745cbb-5387-4d78-9f3c-b1b0bac4553f', name: 'Algeria', code: 'dz'},
	{id: 'cacabc14-1858-4877-91b3-92fc35d23726', name: 'American Samoa', code: 'as'},
	{id: '2cf63426-5d75-45eb-a9af-d4f3953c3dc1', name: 'Andorra', code: 'ad'},
	{id: '7780f25f-856a-4003-ac0a-7510c1f560b3', name: 'Angola', code: 'ao'},
	{id: '8de56662-92c5-4cb1-ae71-1d2312265538', name: 'Anguilla', code: 'ai'},
	{id: 'e9c35bcc-3545-4834-96e0-5b43ed32f2d5', name: 'Antigua', code: 'ag'},
	{id: '00b5c7cc-354c-4070-b0c5-2687c3fa2fb3', name: 'Argentina', code: 'ar'},
	{id: 'adc9b8db-57a3-494f-93bb-8f6846bc9954', name: 'Armenia', code: 'am'},
	{id: '9d0e3f4f-33e4-409a-bab2-42ef06ac7e40', name: 'Aruba', code: 'aw'},
	{id: 'c8311e24-9707-4e98-a056-d356dffa83f2', name: 'Australia', code: 'au'},
	{id: '2678678f-777a-4ddc-b78a-397a719fca33', name: 'Austria', code: 'at'},
	{id: '64f7d535-fa31-40cb-9367-b2da5b9e4faa', name: 'Azerbaijan', code: 'az'},
	{id: 'aa919301-0b8e-47dc-8883-e49f127a65d6', name: 'Bahamas', code: 'bs'},
	{id: '8a689f75-8f8f-4219-9cb7-f397543ffb6a', name: 'Bahrain', code: 'bh'},
	{id: '741e1a22-838e-434d-a0bf-8909deef0123', name: 'Bangladesh', code: 'bd'},
	{id: '27602280-e627-408e-ba10-c30d214d5096', name: 'Barbados', code: 'bb'},
	{id: 'a1699c5e-d805-490e-bffd-20ade8927eae', name: 'Belarus', code: 'by'},
	{id: 'bab5e60e-07c7-45f3-912c-6705516f7df9', name: 'Belgium', code: 'be'},
	{id: '9060d5ca-cd24-4891-acda-7ce9a2f40015', name: 'Belize', code: 'bz'},
	{id: 'f10ee6e6-d05c-45cc-93c3-bed16020f39c', name: 'Benin', code: 'bj'},
	{id: '43b639af-0af3-4d13-a5fd-c88694ebff8f', name: 'Bermuda', code: 'bm'},
	{id: 'af1cf15f-78db-40f7-bd24-800e9312689b', name: 'Bhutan', code: 'bt'},
	{id: 'ce051d88-324f-49d2-afcc-93693032312e', name: 'Bolivia', code: 'bo'},
	{id: '2246a0f6-90c4-410d-82ff-c4f38b2e6951', name: 'Bosnia', code: 'ba'},
	{id: '34a3f265-55e7-40de-9c82-834dd279e6b8', name: 'Botswana', code: 'bw'},
	{id: '0afd4002-5a82-4b7d-bfcc-4a5ceb416157', name: 'Bouvet Island', code: 'bv'},
	{id: '4fd849d6-530f-429f-8664-c3838dea409d', name: 'Brazil', code: 'br'},
	{id: 'd1b57094-60b4-497c-b189-b8e288591675', name: 'British Virgin Islands', code: 'vg'},
	{id: '7232804d-63a6-4ecd-ad12-be18a5f4b796', name: 'Brunei', code: 'bn'},
	{id: '26b6c372-f19a-4376-b12c-17d34a52d235', name: 'Bulgaria', code: 'bg'},
	{id: '51c3cedf-a781-4c0b-9402-724f64b9c4e3', name: 'Burkina Faso', code: 'bf'},
	{id: '95c3639c-6947-4f5c-94b0-7ec4c2328eea', name: 'Burma', code: 'mm'},
	{id: 'c8c63965-e936-4aab-80ad-4d56b4874ecc', name: 'Burundi', code: 'bi'},
	{id: '4d8be2d8-7c24-49c7-9fba-5a4a83422050', name: 'Caicos Islands', code: 'tc'},
	{id: 'd9d166e6-9672-4388-8f0c-c482102a6cd7', name: 'Cambodia', code: 'kh'},
	{id: '412c02db-d044-44cc-93e7-1fc1e6c9ff25', name: 'Cameroon', code: 'cm'},
	{id: 'be204d7d-7e4b-4324-9f40-2de8b5121f50', name: 'Canada', code: 'ca'},
	{id: 'dd4d0d61-2e3f-4673-863e-dabc8ea6843e', name: 'Cape Verde', code: 'cv'},
	{id: '817f3fa4-524c-4627-b59f-243e451eb99d', name: 'Cayman Islands', code: 'ky'},
	{id: '169b3f75-db2a-4b01-a128-cba8e5ffdb0b', name: 'Central African Republic', code: 'cf'},
	{id: 'b9082317-8215-47e0-b004-207b653d4eaf', name: 'Chad', code: 'td'},
	{id: 'd2c2cd6b-7b4b-41ab-95f4-e1f8ef6c0747', name: 'Chile', code: 'cl'},
	{id: '000c1f32-5efa-4f1f-9dc7-9517fbbab949', name: 'China', code: 'cn'},
	{id: 'ae7c249d-46c0-46da-af26-0551d040ce5e', name: 'Christmas Island', code: 'cx'},
	{id: '6ca83412-d1b4-472e-84ce-266af727b80a', name: 'Cocos Islands', code: 'cc'},
	{id: 'd80ec887-7421-48d4-8cba-c9c23f7022ff', name: 'Colombia', code: 'co'},
	{id: '5e2ad286-8fc8-4894-bf16-029eb2924f09', name: 'Comoros', code: 'km'},
	{id: '216ab5cd-eed5-4707-ba55-fef0d35db51b', name: 'Congo', code: 'cd'},
	{id: '451e225b-af4d-45c5-ab65-8533b02b5173', name: 'Congo Brazzaville', code: 'cg'},
	{id: 'eb2daa12-8c11-400d-aca7-d058b92e2afc', name: 'Cook Islands', code: 'ck'},
	{id: '0f859d5c-64a2-4943-abe9-19e4528c5c17', name: 'Costa Rica', code: 'cr'},
	{id: '7726220a-5487-490f-aeb3-ca9273d0c938', name: 'Cote Divoire', code: 'ci'},
	{id: '68c8f531-be5c-4f2c-b107-70a879164768', name: 'Croatia', code: 'hr'},
	{id: '37ba3885-1a19-4ff9-adcb-77f5d78f7bf2', name: 'Cuba', code: 'cu'},
	{id: 'bd80d917-b0d9-4d34-8bee-da5e80c05d6d', name: 'Cyprus', code: 'cy'},
	{id: 'fcb70da2-9732-43a7-b0b4-7c4b21d51556', name: 'Czech Republic', code: 'cz'},
	{id: '1a7030f4-6ed1-4b34-9ea6-625d2db3994e', name: 'Denmark', code: 'dk'},
	{id: '4b75c7cc-7dd1-4b84-9e80-3ee0e40c6e11', name: 'Djibouti', code: 'dj'},
	{id: '629e674f-a717-4d25-ae11-a1c605a858f7', name: 'Dominica', code: 'dm'},
	{id: 'a61e4243-f813-4a6e-aea3-6c31f6f5d9e2', name: 'Dominican Republic', code: 'do'},
	{id: '345074b9-1428-4dd7-a13e-d453540579d8', name: 'Ecuador', code: 'ec'},
	{id: '16ae0bd0-c8cb-4bf5-a079-ba1e48bf0c73', name: 'Egypt', code: 'eg'},
	{id: 'ca44c03f-0e1c-4119-93cf-b1e872743937', name: 'El Salvador', code: 'sv'},
	{id: '2c631af6-24dc-42e1-81ef-44f7d46aa8d3', name: 'England', code: 'gb eng'},
	{id: '1960415f-9019-4a97-b158-97c7ad12e3e4', name: 'Equatorial Guinea', code: 'gq'},
	{id: '638b7711-2a3e-43e0-a11a-d205c444bcc0', name: 'Eritrea', code: 'er'},
	{id: '5e17faa2-9491-40ab-95a1-ac2a9c164267', name: 'Estonia', code: 'ee'},
	{id: '59206785-989a-4429-9095-75d8fa981aec', name: 'Ethiopia', code: 'et'},
	{id: '65f6d65d-6691-42a0-b916-14b1ef3dc792', name: 'Europeanunion', code: 'eu'},
	{id: '99cb3c3d-9e79-4d87-ac8a-e79f59dc7c2d', name: 'Falkland Islands', code: 'fk'},
	{id: '50f0d9b6-663c-4474-b1a4-822582dda1d1', name: 'Faroe Islands', code: 'fo'},
	{id: 'fe4dd5f7-1624-49c9-b46b-2adfb85dae67', name: 'Fiji', code: 'fj'},
	{id: 'd6904fb3-b251-4766-9fb7-3f6d629f433f', name: 'Finland', code: 'fi'},
	{id: 'ec8540c8-0332-420a-aebd-f0d52b87949e', name: 'France', code: 'fr'},
	{id: '912ba433-6841-474a-b38b-3dcffe150268', name: 'French Guiana', code: 'gf'},
	{id: '83496202-c9ef-4175-96f2-47702b95c065', name: 'French Polynesia', code: 'pf'},
	{id: '5ce9007f-d538-4ad3-a188-2c621089bd94', name: 'French Territories', code: 'tf'},
	{id: 'bee641b4-d356-4e46-b49a-c4cf605faf96', name: 'Gabon', code: 'ga'},
	{id: '627e61ad-404a-4eab-9d6d-4ec62dc49385', name: 'Gambia', code: 'gm'},
	{id: 'c8f2d253-510e-4208-8275-7b0db2745fe7', name: 'Georgia', code: 'ge'},
	{id: '649630cb-3309-4223-b43b-84ed3da80453', name: 'Germany', code: 'de'},
	{id: '166275a9-6ea1-4969-95af-afbf1e22d1ce', name: 'Ghana', code: 'gh'},
	{id: 'cee5f0e8-ad59-4688-856d-9f2992c6532c', name: 'Gibraltar', code: 'gi'},
	{id: 'f0b919e5-b198-4851-adcc-35ef300d0cfb', name: 'Greece', code: 'gr'},
	{id: 'd6b1c87b-5fe8-4db2-a29b-c43da02dac58', name: 'Greenland', code: 'gl'},
	{id: 'ad035a2a-66a8-41ad-9f4a-2dde2edbe06f', name: 'Grenada', code: 'gd'},
	{id: '645eb0a4-4a3f-46bd-b073-f716917a0cd0', name: 'Guadeloupe', code: 'gp'},
	{id: '3b160fc1-da01-447c-b46e-bbd39aa3980c', name: 'Guam', code: 'gu'},
	{id: '4e35e379-1971-4235-8eb5-9fb119e5578e', name: 'Guatemala', code: 'gt'},
	{id: '4937de23-02ad-42b6-883a-79e5989ea3c5', name: 'Guinea', code: 'gn'},
	{id: '720ce5fc-879e-4295-9692-785204fe123f', name: 'Guinea-Bissau', code: 'gw'},
	{id: '2b201467-f5af-4924-b8e6-7aa483a3b8a8', name: 'Guyana', code: 'gy'},
	{id: 'f71b36b4-ea49-4773-9eca-15f96910f457', name: 'Haiti', code: 'ht'},
	{id: '08c1f3bc-98f7-42f9-9b72-8b57b0900c63', name: 'Heard Island', code: 'hm'},
	{id: 'bc659fa2-ad4f-4e1d-a41c-d1fdc8c46b8b', name: 'Honduras', code: 'hn'},
	{id: '1dd18f8d-45b3-437b-a760-e9ef6b6334de', name: 'Hong Kong', code: 'hk'},
	{id: '60cb1c65-a1ec-4c25-bf8d-d76577eb40d6', name: 'Hungary', code: 'hu'},
	{id: '5d5afe2b-60a3-4999-bfd9-b138cb462f22', name: 'Iceland', code: 'is'},
	{id: '439c4c3c-b1db-47b9-991d-7daecc6a7f33', name: 'India', code: 'in'},
	{id: 'b7b51d89-1331-4f8a-91cb-63fda288bd22', name: 'Indian Ocean Territory', code: 'io'},
	{id: 'cae1266d-1083-4bc9-b1e8-93417472bf89', name: 'Indonesia', code: 'id'},
	{id: 'e27ceb25-c14c-4fe9-884a-2d343c53edb6', name: 'Iran', code: 'ir'},
	{id: '43a2ffad-04f9-489f-9085-261d449e4758', name: 'Iraq', code: 'iq'},
	{id: '3f551ad4-b8a9-4ba5-b6af-82980e9c5fc1', name: 'Ireland', code: 'ie'},
	{id: 'e28fefd8-d97a-43d5-8a5f-c5843bd6280d', name: 'Israel', code: 'il'},
	{id: '0935edcf-8089-4d06-b27e-a96ff861a735', name: 'Italy', code: 'it'},
	{id: 'e9ed0571-f719-41b8-986e-6c006141ddcf', name: 'Jamaica', code: 'jm'},
	{id: 'e2541668-8d3c-4f9c-81e0-e6d6fde3c18d', name: 'Jan Mayen', code: 'sj'},
	{id: '92382a0a-2990-4777-8ecb-bd9dd2bb1bc9', name: 'Japan', code: 'jp'},
	{id: 'c8babef9-0fc4-42ee-88f9-bb1e12bb3b04', name: 'Jordan', code: 'jo'},
	{id: '8728e185-9f83-4a58-a6a8-c5569051bcaf', name: 'Kazakhstan', code: 'kz'},
	{id: 'a9240565-226f-4c14-9064-a6477472284c', name: 'Kenya', code: 'ke'},
	{id: '85989744-bf20-4ce5-ae3c-cc5e4eae6f48', name: 'Kiribati', code: 'ki'},
	{id: '008a584e-6151-44e8-a6da-21ff1f1a9cc9', name: 'Kuwait', code: 'kw'},
	{id: 'f0fb7cdf-a541-412c-b24d-33a52f4fce1f', name: 'Kyrgyzstan', code: 'kg'},
	{id: 'cf3a7987-dc8e-4406-8f32-c37dc1f17bcc', name: 'Laos', code: 'la'},
	{id: 'b77bd34d-4d2d-4254-9865-cd7380475739', name: 'Latvia', code: 'lv'},
	{id: 'd1533bd0-cc0f-4934-8a93-0dfd3c27efe6', name: 'Lebanon', code: 'lb'},
	{id: 'b5edaf70-0d2a-4856-8f58-788a78e53993', name: 'Lesotho', code: 'ls'},
	{id: '30cf13a1-e3fd-4a3f-b6df-67eaf0906487', name: 'Liberia', code: 'lr'},
	{id: '0341acb7-5717-4e5c-b40c-6482eb7c778f', name: 'Libya', code: 'ly'},
	{id: 'd22e194b-e42f-4a7b-9a0e-34dc00b6c4c4', name: 'Liechtenstein', code: 'li'},
	{id: '71c95cd3-30b7-4d1a-b621-829cf0ec63de', name: 'Lithuania', code: 'lt'},
	{id: '44877342-4d96-41c5-b96e-bc481a624a90', name: 'Luxembourg', code: 'lu'},
	{id: '76ab5d8b-14e4-48a7-b157-f0d0b6f69fd3', name: 'Macau', code: 'mo'},
	{id: 'd29f2560-a675-4876-828b-5ce5a7c03b7d', name: 'Macedonia', code: 'mk'},
	{id: '15ff23c2-fb20-4e3a-aa28-29d1410b5e7a', name: 'Madagascar', code: 'mg'},
	{id: '40f868ed-3596-4d76-8c16-9304ded60979', name: 'Malawi', code: 'mw'},
	{id: 'b5698e48-b28f-4c57-8e97-27b174524c32', name: 'Malaysia', code: 'my'},
	{id: 'ab624f8f-18ae-4050-ab35-063f77cfb4fb', name: 'Maldives', code: 'mv'},
	{id: '020943db-94ad-4079-a999-70b5e2077e27', name: 'Mali', code: 'ml'},
	{id: 'dec23d0d-e926-4d4e-8872-16334ced67dc', name: 'Malta', code: 'mt'},
	{id: '7d8f07cf-e184-417a-af8a-9da44f9f44aa', name: 'Marshall Islands', code: 'mh'},
	{id: 'c0c171f0-d3a0-42ed-b4b3-6a990a769ddd', name: 'Martinique', code: 'mq'},
	{id: 'b6a72fff-6f13-4285-96ff-cd0c911f8e48', name: 'Mauritania', code: 'mr'},
	{id: '1738ff22-8c87-4fc2-99ff-77d1b980bd63', name: 'Mauritius', code: 'mu'},
	{id: 'd835cea5-b5cc-463d-88c2-a899dd8e7f83', name: 'Mayotte', code: 'yt'},
	{id: 'eaf6508e-7f10-4e56-af4e-74cb548415ff', name: 'Mexico', code: 'mx'},
	{id: 'e7c326df-6f23-449c-8b24-debc23a5943a', name: 'Micronesia', code: 'fm'},
	{id: 'f57d5ee5-eb8d-41c2-9d5c-94b00d64426f', name: 'Moldova', code: 'md'},
	{id: '6245d8ef-8b99-4b69-8ea8-4462dcea802b', name: 'Monaco', code: 'mc'},
	{id: 'cd7058d4-04a4-4b6d-bd99-4f2911b6300f', name: 'Mongolia', code: 'mn'},
	{id: '0246ae39-dfaf-4b53-b9eb-9866788fb987', name: 'Montenegro', code: 'me'},
	{id: 'ca9641c9-50dd-45a1-a1d0-b34fbda9c2fe', name: 'Montserrat', code: 'ms'},
	{id: '1d37eeda-6709-4dca-b5eb-e62ee392862f', name: 'Morocco', code: 'ma'},
	{id: '41379f82-5671-4564-b9ef-8e1b0ad1b185', name: 'Mozambique', code: 'mz'},
	{id: '88b581e1-b679-44fc-ad15-d15d2d4e8517', name: 'Namibia', code: 'na'},
	{id: 'b9d696a9-3250-4354-ac8e-abef106c4e18', name: 'Nauru', code: 'nr'},
	{id: '6525ace5-c231-486e-af56-c41d394fbcde', name: 'Nepal', code: 'np'},
	{id: '63f6e1a4-b6dc-4a10-9fe7-c3594594b122', name: 'Netherlands', code: 'nl'},
	{id: '147a7a1d-7b74-4568-8838-0cbbeeaf8a0d', name: 'Netherlandsantilles', code: 'an'},
	{id: 'cc0bd059-8480-4fe2-8621-af95846dad84', name: 'New Caledonia', code: 'nc'},
	{id: '527c9d7c-2bbd-4c79-a448-7b40bd73fc8d', name: 'New Guinea', code: 'pg'},
	{id: 'cd7341ed-4e6e-4d49-b03d-61591c56c6c9', name: 'New Zealand', code: 'nz'},
	{id: '96976d83-2704-4f54-b716-7260c19b7728', name: 'Nicaragua', code: 'ni'},
	{id: 'a3ed6d8d-5a9a-4c28-a598-93965a45b645', name: 'Niger', code: 'ne'},
	{id: '0ff5b9d0-2287-4f59-aa86-8a01dde97140', name: 'Nigeria', code: 'ng'},
	{id: 'dd49036f-b28a-413f-8b5f-233f8ea37129', name: 'Niue', code: 'nu'},
	{id: 'a3c15d4f-f30e-4f47-bd3d-058c7de00b87', name: 'Norfolk Island', code: 'nf'},
	{id: '41fe7d3b-79a9-4ab7-b693-e55af906e8fb', name: 'North Korea', code: 'kp'},
	{id: '9980b63e-d58d-47a5-a809-bb351c8f56d0', name: 'Northern Mariana Islands', code: 'mp'},
	{id: '43f589c8-e571-4bdf-8afa-74774f0b1e54', name: 'Norway', code: 'no'},
	{id: '9f2beea2-7fa5-4e5c-bd13-95405269bfd4', name: 'Oman', code: 'om'},
	{id: '1843efb8-8699-4c02-8f00-f49aa5aab802', name: 'Pakistan', code: 'pk'},
	{id: 'd4e82464-0df2-40f6-89af-03c97eee2823', name: 'Palau', code: 'pw'},
	{id: 'b26c353e-7cd8-4ad7-a78b-fd9917aa5401', name: 'Palestine', code: 'ps'},
	{id: '2a3dfb7d-aaaa-4823-beaf-fefc4302986d', name: 'Panama', code: 'pa'},
	{id: '9ba0823c-fe84-424d-92a7-89d86530164d', name: 'Paraguay', code: 'py'},
	{id: '2c894842-15ea-4e80-b1fb-c7ad8e26af66', name: 'Peru', code: 'pe'},
	{id: '37be7819-0273-485c-8f7f-14f0e3b67ff0', name: 'Philippines', code: 'ph'},
	{id: '0e8c3485-b25d-4be4-ade0-e03cf1384b56', name: 'Pitcairn Islands', code: 'pn'},
	{id: '3342a238-bab4-4ae2-b4ca-1b7560af1e24', name: 'Poland', code: 'pl'},
	{id: 'de887642-d08c-4bf5-8fa3-4fafda447b56', name: 'Portugal', code: 'pt'},
	{id: '20947751-8b2c-46df-bc96-d500d047ca8d', name: 'Puerto Rico', code: 'pr'},
	{id: '20b01d1a-5eca-458c-97ee-684245745c3c', name: 'Qatar', code: 'qa'},
	{id: '013c9c4e-5989-407d-b228-0b1f13b2cd6c', name: 'Reunion', code: 're'},
	{id: 'c8bb833b-ca52-4388-b49c-99b5b2816b49', name: 'Romania', code: 'ro'},
	{id: '65ecaf18-6382-4ee2-ac75-c618e9085223', name: 'Russia', code: 'ru'},
	{id: 'efb46a1c-8a66-4a88-9794-3ac62f3ca3de', name: 'Rwanda', code: 'rw'},
	{id: 'cc0d74cf-6153-485c-8e79-db7588fbfb54', name: 'Saint Helena', code: 'sh'},
	{id: '820999f7-bd29-4906-b867-ef4f048eeb66', name: 'Saint Kitts and Nevis', code: 'kn'},
	{id: '12f0cde8-8221-429d-b194-d132d7467422', name: 'Saint Lucia', code: 'lc'},
	{id: '9eb845ad-b93a-4221-9e02-f7f58fc86e14', name: 'Saint Pierre', code: 'pm'},
	{id: 'e98e101e-6746-46b4-a9f6-463ca2e105dc', name: 'Saint Vincent', code: 'vc'},
	{id: '18b7f3c6-b12d-48d7-addc-77cc3555437f', name: 'Samoa', code: 'ws'},
	{id: '2b4c3d04-efe5-4793-a665-bd8be34369a7', name: 'San Marino', code: 'sm'},
	{id: '765eeb87-1d47-4f89-93a0-8c8a717e5e13', name: 'Sandwich Islands', code: 'gs'},
	{id: 'db41f6e6-fe4f-4732-9a54-f9fbddbd927d', name: 'Sao Tome', code: 'st'},
	{id: '0236367a-6f2c-44f8-b811-252b9e3d2ee8', name: 'Saudi Arabia', code: 'sa'},
	{id: 'afad6965-2801-4da5-a538-b2db7381fa38', name: 'Scotland', code: 'gb sct'},
	{id: '150faa5d-5e35-41c8-b371-122a31dc2775', name: 'Senegal', code: 'sn'},
	{id: '730dc3ea-955e-4586-82b8-78a0c8c6bba0', name: 'Serbia', code: 'rs'},
	{id: 'e4d26b51-4116-4bbf-b404-fc1636c9059f', name: 'Seychelles', code: 'sc'},
	{id: 'bbbd5108-efa1-497a-a70f-05172c500529', name: 'Sierra Leone', code: 'sl'},
	{id: '45b73827-106b-49b7-a471-3dadf74afab9', name: 'Singapore', code: 'sg'},
	{id: '69a0e114-e8bf-411b-9dbf-3ff5761aeb81', name: 'Slovakia', code: 'sk'},
	{id: 'fd0ce850-5e4d-44f1-ad69-e01dcd024792', name: 'Slovenia', code: 'si'},
	{id: 'f4210a45-805f-4d3e-b8c6-00964553eb33', name: 'Solomon Islands', code: 'sb'},
	{id: '242dbc70-ec8e-460b-ab9f-7bb9718f1044', name: 'Somalia', code: 'so'},
	{id: 'ed04b7ec-934e-49a0-8449-5c017738fa44', name: 'South Africa', code: 'za'},
	{id: 'dabc77c5-151c-45bf-8090-a169df2a96b2', name: 'South Korea', code: 'kr'},
	{id: '35f12bc3-e4ea-4557-aadd-229551a31d2f', name: 'Spain', code: 'es'},
	{id: '789c025d-6bd5-449d-a5fa-8698cb525185', name: 'Sri Lanka', code: 'lk'},
	{id: '94619590-7e86-4c0c-a75b-56889a52b827', name: 'Sudan', code: 'sd'},
	{id: 'e198850d-197f-413d-934c-1e523903f742', name: 'Suriname', code: 'sr'},
	{id: 'cab461fd-aa47-4a72-ba45-912b5d3e2c74', name: 'Swaziland', code: 'sz'},
	{id: '5cb3ab4d-3517-48ec-8c12-1475599a1e85', name: 'Sweden', code: 'se'},
	{id: '4cab4aa0-32fb-4001-84f8-cc03e9c624a2', name: 'Switzerland', code: 'ch'},
	{id: 'f1f20f32-0c4e-4841-932b-a2c4b5ecc5ed', name: 'Syria', code: 'sy'},
	{id: '02a3fd31-1487-43d1-9ed1-cd2cc718de68', name: 'Taiwan', code: 'tw'},
	{id: '9719ad06-2c07-4ea5-889c-d3e58368b10d', name: 'Tajikistan', code: 'tj'},
	{id: 'ed83e7bc-bd49-4b0b-8dbb-820577c858ec', name: 'Tanzania', code: 'tz'},
	{id: '5543dd96-f2be-4d69-b79f-9adeb8d2d1fe', name: 'Thailand', code: 'th'},
	{id: '07d61b7f-512b-4ca9-8494-65e314adbb3d', name: 'Timorleste', code: 'tl'},
	{id: '22a9060a-48f1-45db-a4e0-f3a8d36f5ae6', name: 'Togo', code: 'tg'},
	{id: '363604f6-742e-4dc6-9bb4-f531f6459fc6', name: 'Tokelau', code: 'tk'},
	{id: 'd632c208-3e20-4e51-8f08-72e1cf38b2c3', name: 'Tonga', code: 'to'},
	{id: '9849e057-341b-452f-9ff3-fdb893015088', name: 'Trinidad', code: 'tt'},
	{id: '08952a48-b042-4643-9d11-f46b1583463f', name: 'Tunisia', code: 'tn'},
	{id: '95c13da5-2fe0-4ff2-b2ce-b258bf8cbcfd', name: 'Turkey', code: 'tr'},
	{id: 'be8111bf-1d12-46ee-919f-7d955dfddb82', name: 'Turkmenistan', code: 'tm'},
	{id: '18958486-7265-44b2-be76-211ddeb23cb7', name: 'Tuvalu', code: 'tv'},
	{id: '345c750b-bd44-46f6-b684-b065045d2b13', name: 'United Arab Emirates', code: 'ae'},
	{id: 'fb95ffa8-cfc6-4573-afaa-2f6f02d404c8', name: 'Uganda', code: 'ug'},
	{id: '5aeeccbf-1d68-4d4a-b4f8-a500b30570dd', name: 'Ukraine', code: 'ua'},
	{id: '00018a7c-3c09-42aa-9115-7fd06f4f1a44', name: 'United Kingdom', code: 'gb'},
	{id: 'd122a21a-5c9d-4dd9-a372-497b85cae28d', name: 'United States', code: 'us'},
	{id: '4316390f-a8fe-41fa-b2db-607f2b1287b9', name: 'Uruguay', code: 'uy'},
	{id: 'f24ee621-5518-4794-93a1-11cb7b6649e7', name: 'US Minor Islands', code: 'um'},
	{id: 'f99de0d9-5171-453a-99d0-49f972964dad', name: 'US Virgin Islands', code: 'vi'},
	{id: '09912da8-2111-4448-898e-0c97adc11de4', name: 'Uzbekistan', code: 'uz'},
	{id: '45b111cf-42d6-4103-a695-b816fe8d1e5a', name: 'Vanuatu', code: 'vu'},
	{id: '823879ef-4d11-4d7f-b0fe-d2d9f37f3b75', name: 'Vatican City', code: 'va'},
	{id: 'ded4145f-73d9-4065-927c-46b002fbcc52', name: 'Venezuela', code: 've'},
	{id: 'e58e554f-9e8f-4663-8eab-af85e41ea6a4', name: 'Vietnam', code: 'vn'},
	{id: '56655ec2-5ffd-4e0a-ad64-2e811890888a', name: 'Wales', code: 'gb wls'},
	{id: 'bd17a39f-7cac-4a5f-89c6-4395909b6b6b', name: 'Wallis and Futuna', code: 'wf'},
	{id: '63f31776-896c-465a-9b29-c4cfccb93481', name: 'Western Sahara', code: 'eh'},
	{id: '57329b9e-d5c5-49c9-b85e-1d3fd742a220', name: 'Yemen', code: 'ye'},
	{id: '84d79f53-1462-4f74-b050-3f4d1c07d1ad', name: 'Zambia', code: 'zm'},
	{id: '10cf4fb9-9de5-412a-a8a8-7854fa46955a', name: 'Zimbabwe', code: 'zw'},
];

function action() {
	let insert = '';
	countries.forEach(c => {
		insert = insert + `INSERT INTO country(id, version, name, code) VALUES('${c.id}', 1, '${c.name}', '${c.code}');`;
	});
	return insert;
}

export const m20240721b: Migration = {
	name: 'm20240721b',
	action: action(),
};
