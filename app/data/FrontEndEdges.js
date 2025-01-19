const edges = [
  {
    "from": -1,
    "to": 2,
    "id": 1
  },
  {
    "from": 4,
    "to": 2,
    "id": 2
  },
  {
    "from": 1,
    "to": 3,
    "id": 3
  },
  {
    "from": 3,
    "to": 4,
    "id": 4
  },
  {
    "from": 7,
    "to": 6,
    "id": 5
  },
  {
    "from": 1,
    "to": 7,
    "id": 6
  },
  {
    "from": 15,
    "to": 10,
    "id": 8
  },
  {
    "from": "218",
    "to": 11,
    "id": 9
  },
  {
    "from": 11,
    "to": 12,
    "id": 10
  },
  {
    "from": 11,
    "to": 13,
    "id": 11
  },
  {
    "from": 11,
    "to": 14,
    "id": 12
  },
  {
    "from": 16,
    "to": 15,
    "id": 13
  },
  {
    "from": 9,
    "to": 16,
    "id": 14
  },
  {
    "from": "218",
    "to": 17,
    "id": 15
  },
  {
    "from": 17,
    "to": 18,
    "id": 16
  },
  {
    "from": 17,
    "to": 19,
    "id": 17
  },
  {
    "from": 17,
    "to": 20,
    "id": 18
  },
  {
    "from": 17,
    "to": 21,
    "id": 19
  },
  {
    "from": 17,
    "to": 22,
    "id": 20
  },
  {
    "from": -1,
    "to": 101,
    "id": 21
  },
  {
    "from": 101,
    "to": 102,
    "id": 22
  },
  {
    "from": 102,
    "to": 103,
    "id": 23
  },
  {
    "from": 101,
    "to": 104,
    "id": 24
  },
  {
    "from": -1,
    "to": 105,
    "id": 25
  },
  {
    "from": 105,
    "to": 106,
    "id": 26
  },
  {
    "from": 105,
    "to": 107,
    "id": 27
  },
  {
    "from": -1,
    "to": 108,
    "id": 28
  },
  {
    "from": 108,
    "to": 109,
    "id": 29
  },
  {
    "from": 109,
    "to": 110,
    "id": 30
  },
  {
    "from": 109,
    "to": 111,
    "id": 31
  },
  {
    "from": -1,
    "to": 201,
    "id": 32
  },
  {
    "from": 201,
    "to": 202,
    "id": 33
  },
  {
    "from": -1,
    "to": 203,
    "id": 34
  },
  {
    "from": 203,
    "to": 204,
    "id": 35
  },
  {
    "from": 204,
    "to": 205,
    "id": 36
  },
  {
    "from": 205,
    "to": 206,
    "id": 37
  },
  {
    "from": 205,
    "to": 207,
    "id": 38
  },
  {
    "from": -1,
    "to": 208,
    "id": 39
  },
  {
    "from": 208,
    "to": 209,
    "id": 40
  },
  {
    "from": 208,
    "to": 210,
    "id": 41
  },
  {
    "from": 208,
    "to": 211,
    "id": 42
  },
  {
    "from": 208,
    "to": 212,
    "id": 43
  },
  {
    "from": 208,
    "to": 214,
    "id": 44
  },
  {
    "from": 208,
    "to": 215,
    "id": 45
  },
  {
    "from": 202,
    "to": 216,
    "id": 46
  },
  {
    "from": 202,
    "to": 217,
    "id": 47
  },
  {
    "from": 2,
    "to": 6,
    "id": "570cd668-af1f-4c5a-8338-a50d2b23f1d8"
  },
  {
    "from": 10,
    "to": 3,
    "id": "76be556c-fe96-4df6-86ac-73e53bd4f070"
  },
  {
    "from": 10,
    "to": "218",
    "id": "7f311322-25d4-44a0-a6af-23f3622fb6f2"
  },
  {
    "from": 303,
    "to": -1,
    "id": "b4f9f585-4ed5-45cb-a6aa-f88ba1228d09"
  },
  {
    "from": 303,
    "to": 301,
    "id": "ee63298c-5ee8-4276-8892-025435d3477f"
  },
  {
    "from": 301,
    "to": 302,
    "id": "8fb5fcd4-10a9-4f5e-9152-d6e171f6584f"
  },
  {
    "from": 303,
    "to": 304,
    "id": "07ca643b-ad37-4bc4-95e9-ecc47ae21f29"
  },
  {
    "from": 304,
    "to": 305,
    "id": "97aaaaab-f78b-4702-b6d3-7064230a067d"
  },
  {
    "from": 305,
    "to": 300,
    "id": "fed059da-cdb7-45ab-bef6-0752f9410e92"
  },
  {
    "from": 302,
    "to": 300,
    "id": "c3918cac-35c3-4ff9-a72d-970ec016d0fa"
  },
  {
    "from": 300,
    "to": 311,
    "id": "8da635c2-17d7-44c5-b11e-8c503ba33889"
  },
  {
    "from": 311,
    "to": 312,
    "id": "925fbdfe-3ae6-4856-95db-270818feeb6c"
  },
  {
    "from": 311,
    "to": 313,
    "id": "cf4cf4f2-25a3-4e2b-955f-ac60e81daca5"
  },
  {
    "from": 311,
    "to": 317,
    "id": "51e4a6e5-3cc0-492e-862d-ce969f222832"
  },
  {
    "from": 317,
    "to": 319,
    "id": "9d5e3697-c8d1-4e00-a7f5-1ea6dcfe2837"
  },
  {
    "from": 317,
    "to": 318,
    "id": "3fe82d81-4608-463f-8213-707b398af630"
  },
  {
    "from": 328,
    "to": 314,
    "id": "06af34f0-bbfb-4f67-a0ed-6f42c7a4a228"
  },
  {
    "from": 328,
    "to": 317,
    "id": "dd372ec3-dd25-475d-894e-140353727c25"
  },
  {
    "from": 328,
    "to": 324,
    "id": "0a13f6bb-b61a-470e-9ffa-fc73384d1600"
  },
  {
    "from": 324,
    "to": 325,
    "id": "a582d119-b725-413f-9e47-937342689ace"
  },
  {
    "from": 324,
    "to": 327,
    "id": "ea0c59d5-e180-4b98-87c7-a525482a69b5"
  },
  {
    "from": 324,
    "to": 326,
    "id": "68eb6c50-2077-43cb-aa00-27f1392a8b63"
  },
  {
    "from": 328,
    "to": 320,
    "id": "c1c82965-dfbc-48cc-b2b5-70eb8fb03a6f"
  },
  {
    "from": 320,
    "to": 323,
    "id": "57f90f8b-0408-478c-adc3-5a8bb2c34828"
  },
  {
    "from": 320,
    "to": 321,
    "id": "11dfadb8-24e7-4c09-98eb-3b8d64efbacf"
  },
  {
    "from": 320,
    "to": 322,
    "id": "23e59356-fd53-4a4f-8317-1c0986cba42b"
  },
  {
    "from": 300,
    "to": 306,
    "id": "5fae1248-2757-4917-b598-f318b936ffc9"
  },
  {
    "from": 306,
    "to": 328,
    "id": "cac540cd-a31e-43dc-a0c9-f4cccb046580"
  },
  {
    "from": 306,
    "to": 309,
    "id": "f68d96d6-3bfb-4d1f-8a27-06f86ae0344c"
  },
  {
    "from": 316,
    "to": 314,
    "id": "e7ba7cba-39ff-46b3-b413-459d19b98892"
  },
  {
    "from": 315,
    "to": 314,
    "id": "4e0e5c8a-ed06-44a9-89ad-9ccb86fb943d"
  },
  {
    "from": 308,
    "to": 306,
    "id": "9a573fa1-668a-4d67-92e3-e0d77e141558"
  },
  {
    "from": 307,
    "to": 306,
    "id": "71ede687-9cf0-4b0c-9a54-2920fd7fa41c"
  },
  {
    "from": 310,
    "to": 306,
    "id": "344d5dcc-e9df-4a27-8cb8-2cf8148d6b49"
  },
  {
    "from": 402,
    "to": 400,
    "id": "3fb8e9b4-0d85-42f9-9221-5e3a4d4c799d"
  },
  {
    "from": 401,
    "to": 400,
    "id": "2bfcddb3-bc71-4878-9806-335006f4d5e3"
  },
  {
    "from": 404,
    "to": 400,
    "id": "27371457-86a7-41ee-ab19-1e423448844d"
  },
  {
    "from": 403,
    "to": 400,
    "id": "81ff05c4-2298-4c8e-8805-bf84ddd14be9"
  },
  {
    "from": 400,
    "to": 308,
    "id": "dc6e8c78-4f33-4c68-bcd1-b58df3ca4a9a"
  },
  {
    "from": 400,
    "to": 405,
    "id": "8806b4ed-443d-4b49-b20b-a073910b6c16"
  },
  {
    "from": 405,
    "to": 408,
    "id": "f46cb96d-bf98-449e-bf41-bef7cf8915a8"
  },
  {
    "from": 405,
    "to": 406,
    "id": "aab1308a-6134-419f-b5c8-7609af7e2b31"
  },
  {
    "from": 405,
    "to": 407,
    "id": "a4fbe5b6-c952-4f24-997a-e2671600d66b"
  },
  {
    "from": 409,
    "to": 400,
    "id": "dc40d774-b859-453a-9bc9-dd6b589b934e"
  },
  {
    "from": 409,
    "to": 424,
    "id": "56949d1e-97b6-47f3-9acc-71f611a966a7"
  },
  {
    "from": 410,
    "to": 411,
    "id": "19388f4c-6a4a-4d3d-ac1f-afde0207921c"
  },
  {
    "from": 410,
    "to": 412,
    "id": "804b7d8a-9be9-42dc-bc5c-eca3a5aaf823"
  },
  {
    "from": 410,
    "to": 413,
    "id": "ba26921d-4871-46fd-a159-14d0b16986ad"
  },
  {
    "from": 410,
    "to": 414,
    "id": "7f28929d-cf67-4582-b15f-6d26cd7e7e12"
  },
  {
    "from": 410,
    "to": 415,
    "id": "e79f4087-2adb-4acd-9098-7ca9b66e2cd1"
  },
  {
    "from": 410,
    "to": 424,
    "id": "5ab08b04-b4a0-4775-8b6a-2932042d7264"
  },
  {
    "from": 423,
    "to": 424,
    "id": "45525b19-aa67-4f57-8c4b-240ebc2bfcaa"
  },
  {
    "from": 420,
    "to": 424,
    "id": "1aa2e6f2-a353-4659-99c0-9ce64c732c2f"
  },
  {
    "from": 420,
    "to": 422,
    "id": "7c134586-bb8d-4d90-b5d6-01d5d03738b3"
  },
  {
    "from": 420,
    "to": 421,
    "id": "02eed96a-ddbb-4d0a-8d6b-84fbc73f5f74"
  },
  {
    "from": 416,
    "to": 419,
    "id": "4a69a4cd-d5e3-461b-9a63-f9776e75d78d"
  },
  {
    "from": 416,
    "to": 418,
    "id": "4fe160c7-67ea-46b8-b948-1dda1e4c093f"
  },
  {
    "from": 416,
    "to": 417,
    "id": "e874e061-a102-4dbc-bb2a-9e713009df9e"
  },
  {
    "from": 416,
    "to": 424,
    "id": "7e4d4f57-c7c1-479d-a1a8-b5e0143aac13"
  }


];

export default edges;