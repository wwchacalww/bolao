async function addGames() {

const games =  [
            {
                "round": 1,
                "date": "2026-06-11",
                "time": "19:00",
                "status": "agendado",
                "stadium": "Azteca",
                "homeTeam": {
                    "name": "d5430e3c-54e0-405d-bde5-5127b873983c",
                },
                "awayTeam": {
                    "name": "6f6bb866-0863-440b-881e-06119fce34f7",
                },
                "group": "Grupo A"
            },
            {
                "round": 1,
                "date": "2026-06-12",
                "time": "02:00",
                "status": "agendado",
                "stadium": "Akron",
                "homeTeam": {
                    "name": "b60bc21d-5ed7-495e-ba52-13a73bcc0c81",
                },
                "awayTeam": {
                    "name": "6a615694-9ff1-4ea8-93e8-64df75949ab1",
                },
                "group": "Grupo A"
            },
            {
                "round": 1,
                "date": "2026-06-12",
                "time": "19:00",
                "status": "agendado",
                "stadium": "Toronto Field",
                "homeTeam": {
                    "name": "222b789d-4c8e-4d1a-8847-edaf1be50a04",
                },
                "awayTeam": {
                    "name": "64b14fb7-7367-4369-8538-34124dbee5e3",
                },
                "group": "Grupo B"
            },
            {
                "round": 1,
                "date": "2026-06-13",
                "time": "01:00",
                "status": "agendado",
                "stadium": "Los Angeles",
                "homeTeam": {
                    "name": "03b4c0aa-2d83-4c34-8703-01dae049269c",
                },
                "awayTeam": {
                    "name": "4080ae6d-08f1-4363-b5f9-c939f88a218a",
                },
                "group": "Grupo D"
            },
            {
                "round": 1,
                "date": "2026-06-13",
                "time": "19:00",
                "status": "agendado",
                "stadium": "Santa Clara",
                "homeTeam": {
                    "name": "d1ff5a9b-3049-496d-87d2-3a94c08fe23d",
                },
                "awayTeam": {
                    "name": "98d894e1-85a5-4dce-93e5-508f2a180ed4",
                },
                "group": "Grupo B"
            },
            {
                "round": 1,
                "date": "2026-06-13",
                "time": "22:00",
                "status": "agendado",
                "stadium": "Nova Jersey",
                "homeTeam": {
                    "name": "2ea57105-1f1c-4546-beaa-4d27452e8648",
                },
                "awayTeam": {
                    "name": "4cc6e367-f4c2-4359-a5b2-673de8b1072e",
                },
                "group": "Grupo C"
            },
            {
                "round": 1,
                "date": "2026-06-14",
                "time": "01:00",
                "status": "agendado",
                "stadium": "Boston",
                "homeTeam": {
                    "name": "ec7b3ecd-29c8-45c4-bd2b-f8e372a9189a",
                },
                "awayTeam": {
                    "name": "df91eafa-4be6-4347-8f13-fddbba8aedfb",
                },
                "group": "Grupo C"
            },
            {
                "round": 1,
                "date": "2026-06-14",
                "time": "04:00",
                "status": "agendado",
                "stadium": "Vancouver Place",
                "homeTeam": {
                    "name": "2b9eb0cd-1124-45d5-a954-ac944a50763f",
                },
                "awayTeam": {
                    "name": "48ed0dd8-df75-405a-860d-9c9e0f28fa2f",
                },
                "group": "Grupo D"
            },
            {
                "round": 1,
                "date": "2026-06-14",
                "time": "17:00",
                "status": "agendado",
                "stadium": "Houston",
                "homeTeam": {
                    "name": "129c4399-0db5-4740-8126-fc62ef735e9e",
                },
                "awayTeam": {
                    "name": "36fc0bfb-e2f5-44e1-8fb6-4f6ebb9816cf",
                },
                "group": "Grupo E"
            },
            {
                "round": 1,
                "date": "2026-06-14",
                "time": "20:00",
                "status": "agendado",
                "stadium": "Dallas",
                "homeTeam": {
                    "name": "c53a975c-4693-427d-8b51-62168d762310",
                },
                "awayTeam": {
                    "name": "5ce735e6-53b8-4d04-ab08-b563ede2baa3",
                },
                "group": "Grupo F"
            },
            {
                "round": 1,
                "date": "2026-06-14",
                "time": "23:00",
                "status": "agendado",
                "stadium": "Filadélfia",
                "homeTeam": {
                    "name": "0bd08fd3-eef0-49d1-9682-7ad7312ecb0e",
                },
                "awayTeam": {
                    "name": "c75cf0fb-9451-4c5c-85c9-b60d4f3daa8f",
                },
                "group": "Grupo E"
            },
            {
                "round": 1,
                "date": "2026-06-15",
                "time": "02:00",
                "status": "agendado",
                "stadium": "El Gigante de Acero",
                "homeTeam": {
                    "name": "f0c50d7f-57a2-49df-820f-4ef60435d2c0",
                },
                "awayTeam": {
                    "name": "5c712ed1-ddc7-4a15-a6e5-017a53a7d4ad",
                },
                "group": "Grupo F"
            },
            {
                "round": 1,
                "date": "2026-06-15",
                "time": "16:00",
                "status": "agendado",
                "stadium": "Atlanta",
                "homeTeam": {
                    "name": "52417c89-bf3f-4ad4-8b57-7afdf7cf0ed2",
                },
                "awayTeam": {
                    "name": "aa718fe2-c2ce-425d-8cc7-1f8b1365b11e",
                },
                "group": "Grupo H"
            },
            {
                "round": 1,
                "date": "2026-06-15",
                "time": "19:00",
                "status": "agendado",
                "stadium": "Seattle Field",
                "homeTeam": {
                    "name": "be00d170-3b6a-4d20-875d-a1650f9484a6",
                },
                "awayTeam": {
                    "name": "0406c84a-a0c3-45f0-afd5-a052567ee689",
                },
                "group": "Grupo G"
            },
            {
                "round": 1,
                "date": "2026-06-15",
                "time": "22:00",
                "status": "agendado",
                "stadium": "Miami",
                "homeTeam": {
                    "name": "c4838b82-90fd-450a-9e61-d212cf82453a",
                },
                "awayTeam": {
                    "name": "912b0099-9ab0-44cc-a4bc-ad5f37948b62",
                },
                "group": "Grupo H"
            },
            {
                "round": 1,
                "date": "2026-06-16",
                "time": "01:00",
                "status": "agendado",
                "stadium": "Los Angeles",
                "homeTeam": {
                    "name": "905ba9e2-4d44-45c2-bb9b-ade03aa0069f",
                },
                "awayTeam": {
                    "name": "0df7d17e-4742-46d9-9510-ebfcaaaaecaa",
                },
                "group": "Grupo G"
            },
            {
                "round": 1,
                "date": "2026-06-16",
                "time": "19:00",
                "status": "agendado",
                "stadium": "Nova Jersey",
                "homeTeam": {
                    "name": "6daaf8ec-7181-4837-a0c8-0e3c025fb4a7",
                },
                "awayTeam": {
                    "name": "6aa4d10d-f3a4-4872-b152-d563d2092c8f",
                },
                "group": "Grupo I"
            },
            {
                "round": 1,
                "date": "2026-06-16",
                "time": "22:00",
                "status": "agendado",
                "stadium": "Boston",
                "homeTeam": {
                    "name": "108cabd7-9c2c-400b-83f7-360a0d526bb7",
                },
                "awayTeam": {
                    "name": "f32ad8ba-de0d-4893-9cee-967e3cb2ffdc",
                },
                "group": "Grupo I"
            },
            {
                "round": 1,
                "date": "2026-06-17",
                "time": "01:00",
                "status": "agendado",
                "stadium": "Kansas City",
                "homeTeam": {
                    "name": "752113c5-519b-480b-9f05-dbe8bfa20b6f",
                },
                "awayTeam": {
                    "name": "bc40bc34-c716-49f7-b8c5-b4ee910e08f8",
                },
                "group": "Grupo J"
            },
            {
                "round": 1,
                "date": "2026-06-17",
                "time": "04:00",
                "status": "agendado",
                "stadium": "Santa Clara",
                "homeTeam": {
                    "name": "9775d1f8-cb6b-4748-a885-5f8ea0a2e02b",
                },
                "awayTeam": {
                    "name": "aebba705-0a58-4219-afe1-8e9ea542e739",
                },
                "group": "Grupo J"
            },
            {
                "round": 1,
                "date": "2026-06-17",
                "time": "17:00",
                "status": "agendado",
                "stadium": "Houston",
                "homeTeam": {
                    "name": "5147855e-3c33-44bd-9a0f-b84eeee094b6",
                },
                "awayTeam": {
                    "name": "930ff31c-9dad-4f6b-903a-de402932a900",
                },
                "group": "Grupo K"
            },
            {
                "round": 1,
                "date": "2026-06-17",
                "time": "20:00",
                "status": "agendado",
                "stadium": "Dallas",
                "homeTeam": {
                    "name": "ad3376f6-ea2b-4fdb-ab7c-024a2c3a8112",
                },
                "awayTeam": {
                    "name": "fd469b54-9de4-421e-a5cd-ab14dc675439",
                },
                "group": "Grupo L"
            },
            {
                "round": 1,
                "date": "2026-06-17",
                "time": "23:00",
                "status": "agendado",
                "stadium": "Toronto Field",
                "homeTeam": {
                    "name": "1cd3ab8a-be02-4221-ad5e-70649e99ecb4",
                },
                "awayTeam": {
                    "name": "0296da3d-8f58-45ff-af78-e1c79191d1a5",
                },
                "group": "Grupo L"
            },
            {
                "round": 1,
                "date": "2026-06-18",
                "time": "02:00",
                "status": "agendado",
                "stadium": "Azteca",
                "homeTeam": {
                    "name": "b6ef69b2-7038-45ea-a51b-cbf4bdc88acc",
                },
                "awayTeam": {
                    "name": "2807d1be-7f2b-4109-9c5a-1f3c5ce9bc42",
                },
                "group": "Grupo K"
            },
            {
                "round": 2,
                "date": "2026-06-18",
                "time": "16:00",
                "status": "agendado",
                "stadium": "Atlanta",
                "homeTeam": {
                    "name": "6a615694-9ff1-4ea8-93e8-64df75949ab1",
                },
                "awayTeam": {
                    "name": "6f6bb866-0863-440b-881e-06119fce34f7",
                },
                "group": "Grupo A"
            },
            {
                "round": 2,
                "date": "2026-06-18",
                "time": "19:00",
                "status": "agendado",
                "stadium": "Los Angeles",
                "homeTeam": {
                    "name": "98d894e1-85a5-4dce-93e5-508f2a180ed4",
                },
                "awayTeam": {
                    "name": "64b14fb7-7367-4369-8538-34124dbee5e3",
                },
                "group": "Grupo B"
            },
            {
                "round": 2,
                "date": "2026-06-18",
                "time": "22:00",
                "status": "agendado",
                "stadium": "Vancouver Place",
                "homeTeam": {
                    "name": "222b789d-4c8e-4d1a-8847-edaf1be50a04",
                },
                "awayTeam": {
                    "name": "d1ff5a9b-3049-496d-87d2-3a94c08fe23d",
                },
                "group": "Grupo B"
            },
            {
                "round": 2,
                "date": "2026-06-19",
                "time": "01:00",
                "status": "agendado",
                "stadium": "Akron",
                "homeTeam": {
                    "name": "d5430e3c-54e0-405d-bde5-5127b873983c",
                },
                "awayTeam": {
                    "name": "b60bc21d-5ed7-495e-ba52-13a73bcc0c81",
                },
                "group": "Grupo A"
            },
            {
                "round": 2,
                "date": "2026-06-19",
                "time": "19:00",
                "status": "agendado",
                "stadium": "Seattle Field",
                "homeTeam": {
                    "name": "03b4c0aa-2d83-4c34-8703-01dae049269c",
                },
                "awayTeam": {
                    "name": "2b9eb0cd-1124-45d5-a954-ac944a50763f",
                },
                "group": "Grupo D"
            },
            {
                "round": 2,
                "date": "2026-06-19",
                "time": "22:00",
                "status": "agendado",
                "stadium": "Boston",
                "homeTeam": {
                    "name": "df91eafa-4be6-4347-8f13-fddbba8aedfb",
                },
                "awayTeam": {
                    "name": "4cc6e367-f4c2-4359-a5b2-673de8b1072e",
                },
                "group": "Grupo C"
            },
            {
                "round": 2,
                "date": "2026-06-20",
                "time": "00:30",
                "status": "agendado",
                "stadium": "Filadélfia",
                "homeTeam": {
                    "name": "2ea57105-1f1c-4546-beaa-4d27452e8648",
                },
                "awayTeam": {
                    "name": "ec7b3ecd-29c8-45c4-bd2b-f8e372a9189a",
                },
                "group": "Grupo C"
            },
            {
                "round": 2,
                "date": "2026-06-20",
                "time": "04:00",
                "status": "agendado",
                "stadium": "Santa Clara",
                "homeTeam": {
                    "name": "48ed0dd8-df75-405a-860d-9c9e0f28fa2f",
                },
                "awayTeam": {
                    "name": "4080ae6d-08f1-4363-b5f9-c939f88a218a",
                },
                "group": "Grupo D"
            },
            {
                "round": 2,
                "date": "2026-06-20",
                "time": "17:00",
                "status": "agendado",
                "stadium": "Houston",
                "homeTeam": {
                    "name": "c53a975c-4693-427d-8b51-62168d762310",
                },
                "awayTeam": {
                    "name": "f0c50d7f-57a2-49df-820f-4ef60435d2c0",
                },
                "group": "Grupo F"
            },
            {
                "round": 2,
                "date": "2026-06-20",
                "time": "20:00",
                "status": "agendado",
                "stadium": "Toronto Field",
                "homeTeam": {
                    "name": "129c4399-0db5-4740-8126-fc62ef735e9e",
                },
                "awayTeam": {
                    "name": "0bd08fd3-eef0-49d1-9682-7ad7312ecb0e",
                },
                "group": "Grupo E"
            },
            {
                "round": 2,
                "date": "2026-06-21",
                "time": "00:00",
                "status": "agendado",
                "stadium": "Kansas City",
                "homeTeam": {
                    "name": "c75cf0fb-9451-4c5c-85c9-b60d4f3daa8f",
                },
                "awayTeam": {
                    "name": "36fc0bfb-e2f5-44e1-8fb6-4f6ebb9816cf",
                },
                "group": "Grupo E"
            },
            {
                "round": 2,
                "date": "2026-06-21",
                "time": "04:00",
                "status": "agendado",
                "stadium": "El Gigante de Acero",
                "homeTeam": {
                    "name": "5c712ed1-ddc7-4a15-a6e5-017a53a7d4ad",
                },
                "awayTeam": {
                    "name": "5ce735e6-53b8-4d04-ab08-b563ede2baa3",
                },
                "group": "Grupo F"
            },
            {
                "round": 2,
                "date": "2026-06-21",
                "time": "16:00",
                "status": "agendado",
                "stadium": "Atlanta",
                "homeTeam": {
                    "name": "52417c89-bf3f-4ad4-8b57-7afdf7cf0ed2",
                },
                "awayTeam": {
                    "name": "c4838b82-90fd-450a-9e61-d212cf82453a",
                },
                "group": "Grupo H"
            },
            {
                "round": 2,
                "date": "2026-06-21",
                "time": "19:00",
                "status": "agendado",
                "stadium": "Los Angeles",
                "homeTeam": {
                    "name": "be00d170-3b6a-4d20-875d-a1650f9484a6",
                },
                "awayTeam": {
                    "name": "905ba9e2-4d44-45c2-bb9b-ade03aa0069f",
                },
                "group": "Grupo G"
            },
            {
                "round": 2,
                "date": "2026-06-21",
                "time": "22:00",
                "status": "agendado",
                "stadium": "Miami",
                "homeTeam": {
                    "name": "912b0099-9ab0-44cc-a4bc-ad5f37948b62",
                },
                "awayTeam": {
                    "name": "aa718fe2-c2ce-425d-8cc7-1f8b1365b11e",
                },
                "group": "Grupo H"
            },
            {
                "round": 2,
                "date": "2026-06-22",
                "time": "01:00",
                "status": "agendado",
                "stadium": "Vancouver Place",
                "homeTeam": {
                    "name": "0df7d17e-4742-46d9-9510-ebfcaaaaecaa",
                },
                "awayTeam": {
                    "name": "0406c84a-a0c3-45f0-afd5-a052567ee689",
                },
                "group": "Grupo G"
            },
            {
                "round": 2,
                "date": "2026-06-22",
                "time": "17:00",
                "status": "agendado",
                "stadium": "Dallas",
                "homeTeam": {
                    "name": "752113c5-519b-480b-9f05-dbe8bfa20b6f",
                },
                "awayTeam": {
                    "name": "9775d1f8-cb6b-4748-a885-5f8ea0a2e02b",
                },
                "group": "Grupo J"
            },
            {
                "round": 2,
                "date": "2026-06-22",
                "time": "21:00",
                "status": "agendado",
                "stadium": "Filadélfia",
                "homeTeam": {
                    "name": "6daaf8ec-7181-4837-a0c8-0e3c025fb4a7",
                },
                "awayTeam": {
                    "name": "108cabd7-9c2c-400b-83f7-360a0d526bb7",
                },
                "group": "Grupo I"
            },
            {
                "round": 2,
                "date": "2026-06-23",
                "time": "00:00",
                "status": "agendado",
                "stadium": "Nova Jersey",
                "homeTeam": {
                    "name": "f32ad8ba-de0d-4893-9cee-967e3cb2ffdc",
                },
                "awayTeam": {
                    "name": "6aa4d10d-f3a4-4872-b152-d563d2092c8f",
                },
                "group": "Grupo I"
            },
            {
                "round": 2,
                "date": "2026-06-23",
                "time": "03:00",
                "status": "agendado",
                "stadium": "Santa Clara",
                "homeTeam": {
                    "name": "aebba705-0a58-4219-afe1-8e9ea542e739",
                },
                "awayTeam": {
                    "name": "bc40bc34-c716-49f7-b8c5-b4ee910e08f8",
                },
                "group": "Grupo J"
            },
            {
                "round": 2,
                "date": "2026-06-23",
                "time": "17:00",
                "status": "agendado",
                "stadium": "Houston",
                "homeTeam": {
                    "name": "5147855e-3c33-44bd-9a0f-b84eeee094b6",
                },
                "awayTeam": {
                    "name": "b6ef69b2-7038-45ea-a51b-cbf4bdc88acc",
                },
                "group": "Grupo K"
            },
            {
                "round": 2,
                "date": "2026-06-23",
                "time": "20:00",
                "status": "agendado",
                "stadium": "Boston",
                "homeTeam": {
                    "name": "ad3376f6-ea2b-4fdb-ab7c-024a2c3a8112",
                },
                "awayTeam": {
                    "name": "1cd3ab8a-be02-4221-ad5e-70649e99ecb4",
                },
                "group": "Grupo L"
            },
            {
                "round": 2,
                "date": "2026-06-23",
                "time": "23:00",
                "status": "agendado",
                "stadium": "Toronto Field",
                "homeTeam": {
                    "name": "0296da3d-8f58-45ff-af78-e1c79191d1a5",
                },
                "awayTeam": {
                    "name": "fd469b54-9de4-421e-a5cd-ab14dc675439",
                },
                "group": "Grupo L"
            },
            {
                "round": 2,
                "date": "2026-06-24",
                "time": "02:00",
                "status": "agendado",
                "stadium": "Akron",
                "homeTeam": {
                    "name": "2807d1be-7f2b-4109-9c5a-1f3c5ce9bc42",
                },
                "awayTeam": {
                    "name": "930ff31c-9dad-4f6b-903a-de402932a900",
                },
                "group": "Grupo K"
            },
            {
                "round": 3,
                "date": "2026-06-24",
                "time": "19:00",
                "status": "agendado",
                "stadium": "Seattle Field",
                "homeTeam": {
                    "name": "64b14fb7-7367-4369-8538-34124dbee5e3",
                },
                "awayTeam": {
                    "name": "d1ff5a9b-3049-496d-87d2-3a94c08fe23d",
                },
                "group": "Grupo B"
            },
            {
                "round": 3,
                "date": "2026-06-24",
                "time": "19:00",
                "status": "agendado",
                "stadium": "Vancouver Place",
                "homeTeam": {
                    "name": "98d894e1-85a5-4dce-93e5-508f2a180ed4",
                },
                "awayTeam": {
                    "name": "222b789d-4c8e-4d1a-8847-edaf1be50a04",
                },
                "group": "Grupo B"
            },
            {
                "round": 3,
                "date": "2026-06-24",
                "time": "22:00",
                "status": "agendado",
                "stadium": "Atlanta",
                "homeTeam": {
                    "name": "4cc6e367-f4c2-4359-a5b2-673de8b1072e",
                },
                "awayTeam": {
                    "name": "ec7b3ecd-29c8-45c4-bd2b-f8e372a9189a",
                },
                "group": "Grupo C"
            },
            {
                "round": 3,
                "date": "2026-06-24",
                "time": "22:00",
                "status": "agendado",
                "stadium": "Miami",
                "homeTeam": {
                    "name": "df91eafa-4be6-4347-8f13-fddbba8aedfb",
                },
                "awayTeam": {
                    "name": "2ea57105-1f1c-4546-beaa-4d27452e8648",
                },
                "group": "Grupo C"
            },
            {
                "round": 3,
                "date": "2026-06-25",
                "time": "01:00",
                "status": "agendado",
                "stadium": "El Gigante de Acero",
                "homeTeam": {
                    "name": "6f6bb866-0863-440b-881e-06119fce34f7",
                },
                "awayTeam": {
                    "name": "b60bc21d-5ed7-495e-ba52-13a73bcc0c81",
                },
                "group": "Grupo A"
            },
            {
                "round": 3,
                "date": "2026-06-25",
                "time": "01:00",
                "status": "agendado",
                "stadium": "Azteca",
                "homeTeam": {
                    "name": "6a615694-9ff1-4ea8-93e8-64df75949ab1",
                },
                "awayTeam": {
                    "name": "d5430e3c-54e0-405d-bde5-5127b873983c",
                },
                "group": "Grupo A"
            },
            {
                "round": 3,
                "date": "2026-06-25",
                "time": "20:00",
                "status": "agendado",
                "stadium": "Nova Jersey",
                "homeTeam": {
                    "name": "c75cf0fb-9451-4c5c-85c9-b60d4f3daa8f",
                },
                "awayTeam": {
                    "name": "129c4399-0db5-4740-8126-fc62ef735e9e",
                },
                "group": "Grupo E"
            },
            {
                "round": 3,
                "date": "2026-06-25",
                "time": "20:00",
                "status": "agendado",
                "stadium": "Filadélfia",
                "homeTeam": {
                    "name": "36fc0bfb-e2f5-44e1-8fb6-4f6ebb9816cf",
                },
                "awayTeam": {
                    "name": "0bd08fd3-eef0-49d1-9682-7ad7312ecb0e",
                },
                "group": "Grupo E"
            },
            {
                "round": 3,
                "date": "2026-06-25",
                "time": "23:00",
                "status": "agendado",
                "stadium": "Dallas",
                "homeTeam": {
                    "name": "5ce735e6-53b8-4d04-ab08-b563ede2baa3",
                },
                "awayTeam": {
                    "name": "f0c50d7f-57a2-49df-820f-4ef60435d2c0",
                },
                "group": "Grupo F"
            },
            {
                "round": 3,
                "date": "2026-06-25",
                "time": "23:00",
                "status": "agendado",
                "stadium": "Kansas City",
                "homeTeam": {
                    "name": "5c712ed1-ddc7-4a15-a6e5-017a53a7d4ad",
                },
                "awayTeam": {
                    "name": "c53a975c-4693-427d-8b51-62168d762310",
                },
                "group": "Grupo F"
            },
            {
                "round": 3,
                "date": "2026-06-26",
                "time": "02:00",
                "status": "agendado",
                "stadium": "Los Angeles",
                "homeTeam": {
                    "name": "48ed0dd8-df75-405a-860d-9c9e0f28fa2f",
                },
                "awayTeam": {
                    "name": "03b4c0aa-2d83-4c34-8703-01dae049269c",
                },
                "group": "Grupo D"
            },
            {
                "round": 3,
                "date": "2026-06-26",
                "time": "02:00",
                "status": "agendado",
                "stadium": "Santa Clara",
                "homeTeam": {
                    "name": "4080ae6d-08f1-4363-b5f9-c939f88a218a",
                },
                "awayTeam": {
                    "name": "2b9eb0cd-1124-45d5-a954-ac944a50763f",
                },
                "group": "Grupo D"
            },
            {
                "round": 3,
                "date": "2026-06-26",
                "time": "19:00",
                "status": "agendado",
                "stadium": "Toronto Field",
                "homeTeam": {
                    "name": "6aa4d10d-f3a4-4872-b152-d563d2092c8f",
                },
                "awayTeam": {
                    "name": "108cabd7-9c2c-400b-83f7-360a0d526bb7",
                },
                "group": "Grupo I"
            },
            {
                "round": 3,
                "date": "2026-06-26",
                "time": "19:00",
                "status": "agendado",
                "stadium": "Boston",
                "homeTeam": {
                    "name": "f32ad8ba-de0d-4893-9cee-967e3cb2ffdc",
                },
                "awayTeam": {
                    "name": "6daaf8ec-7181-4837-a0c8-0e3c025fb4a7",
                },
                "group": "Grupo I"
            },
            {
                "round": 3,
                "date": "2026-06-27",
                "time": "00:00",
                "status": "agendado",
                "stadium": "Houston",
                "homeTeam": {
                    "name": "aa718fe2-c2ce-425d-8cc7-1f8b1365b11e",
                },
                "awayTeam": {
                    "name": "c4838b82-90fd-450a-9e61-d212cf82453a",
                },
                "group": "Grupo H"
            },
            {
                "round": 3,
                "date": "2026-06-27",
                "time": "00:00",
                "status": "agendado",
                "stadium": "Akron",
                "homeTeam": {
                    "name": "912b0099-9ab0-44cc-a4bc-ad5f37948b62",
                },
                "awayTeam": {
                    "name": "52417c89-bf3f-4ad4-8b57-7afdf7cf0ed2",
                },
                "group": "Grupo H"
            },
            {
                "round": 3,
                "date": "2026-06-27",
                "time": "03:00",
                "status": "agendado",
                "stadium": "Seattle Field",
                "homeTeam": {
                    "name": "0406c84a-a0c3-45f0-afd5-a052567ee689",
                },
                "awayTeam": {
                    "name": "905ba9e2-4d44-45c2-bb9b-ade03aa0069f",
                },
                "group": "Grupo G"
            },
            {
                "round": 3,
                "date": "2026-06-27",
                "time": "03:00",
                "status": "agendado",
                "stadium": "Vancouver Place",
                "homeTeam": {
                    "name": "0df7d17e-4742-46d9-9510-ebfcaaaaecaa",
                },
                "awayTeam": {
                    "name": "be00d170-3b6a-4d20-875d-a1650f9484a6",
                },
                "group": "Grupo G"
            },
            {
                "round": 3,
                "date": "2026-06-27",
                "time": "21:00",
                "status": "agendado",
                "stadium": "Nova Jersey",
                "homeTeam": {
                    "name": "0296da3d-8f58-45ff-af78-e1c79191d1a5",
                },
                "awayTeam": {
                    "name": "ad3376f6-ea2b-4fdb-ab7c-024a2c3a8112",
                },
                "group": "Grupo L"
            },
            {
                "round": 3,
                "date": "2026-06-27",
                "time": "21:00",
                "status": "agendado",
                "stadium": "Filadélfia",
                "homeTeam": {
                    "name": "fd469b54-9de4-421e-a5cd-ab14dc675439",
                },
                "awayTeam": {
                    "name": "1cd3ab8a-be02-4221-ad5e-70649e99ecb4",
                },
                "group": "Grupo L"
            },
            {
                "round": 3,
                "date": "2026-06-27",
                "time": "23:30",
                "status": "agendado",
                "stadium": "Atlanta",
                "homeTeam": {
                    "name": "930ff31c-9dad-4f6b-903a-de402932a900",
                },
                "awayTeam": {
                    "name": "b6ef69b2-7038-45ea-a51b-cbf4bdc88acc",
                },
                "group": "Grupo K"
            },
            {
                "round": 3,
                "date": "2026-06-27",
                "time": "23:30",
                "status": "agendado",
                "stadium": "Miami",
                "homeTeam": {
                    "name": "2807d1be-7f2b-4109-9c5a-1f3c5ce9bc42",
                },
                "awayTeam": {
                    "name": "5147855e-3c33-44bd-9a0f-b84eeee094b6",
                },
                "group": "Grupo K"
            },
            {
                "round": 3,
                "date": "2026-06-28",
                "time": "02:00",
                "status": "agendado",
                "stadium": "Kansas City",
                "homeTeam": {
                    "name": "bc40bc34-c716-49f7-b8c5-b4ee910e08f8",
                },
                "awayTeam": {
                    "name": "9775d1f8-cb6b-4748-a885-5f8ea0a2e02b",
                },
                "group": "Grupo J"
            },
            {
                "round": 3,
                "date": "2026-06-28",
                "time": "02:00",
                "status": "agendado",
                "stadium": "Dallas",
                "homeTeam": {
                    "name": "aebba705-0a58-4219-afe1-8e9ea542e739",
                },
                "awayTeam": {
                    "name": "752113c5-519b-480b-9f05-dbe8bfa20b6f",
                },
                "group": "Grupo J"
            }
        ]

const gamesToAdd = games.map( game => {
  const gameDate = new Date(game.date)
  const gameDia = new Intl.DateTimeFormat("pt-BR", {
    weekday: "short",
    month: "numeric",
    day: "numeric"
  }).format(gameDate).toLocaleUpperCase().replace('.', '')
  console
  return {
    played_at: gameDia+ ' ' + game.time,
    first_country_id: game.homeTeam.name,
    second_country_id: game.awayTeam.name,
    group: game.group
  }
})


  gamesToAdd.forEach(async game => {
    try {
      const response = await fetch("http://localhost:3000/games/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
      })
      console.log(response)
    }catch (error) {
      console.log(error)
    }
  })
}

addGames().then(() => {
  console.log("foi")
})