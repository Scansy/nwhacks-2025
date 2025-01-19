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
    "from": 500,
    "to": 503,
    "id": "7cbef6ab-6f27-4355-873c-cc7c2dcde187"
  },
  {
    "from": 500,
    "to": 501,
    "id": "1289ff41-87da-4247-8b89-3f87cd1e8ff9"
  },
  {
    "from": 503,
    "to": 504,
    "id": "c11cf957-e78e-4fd7-967b-4d76fb58aa7d"
  },
  {
    "from": 504,
    "to": 505,
    "id": "6c9326ae-2d3c-49a7-8207-daa4b1dc416f"
  },
  {
    "from": 512,
    "to": 513,
    "id": "cba1d457-341d-4af3-9cbc-29d84191e4d5"
  },
  {
    "from": 512,
    "to": 514,
    "id": "9ad4a092-182a-4081-bbc4-5faa917c830c"
  },
  {
    "from": 514,
    "to": 515,
    "id": "6d5d58d1-13d6-4b05-b38f-fb0978b48a5d"
  },
  {
    "from": 512,
    "to": 516,
    "id": "2fcc5078-df88-4a75-be21-583ba148fb59"
  },
  {
    "from": 516,
    "to": 517,
    "id": "37406cca-0cf7-4ee5-a899-ee93b11222ee"
  },
  {
    "from": 512,
    "to": 518,
    "id": "c2a1083f-39aa-4c0d-8229-a43a0c5681de"
  },
  {
    "from": 518,
    "to": 520,
    "id": "a8793b23-c2c8-46c7-b191-a6f86a5315ef"
  },
  {
    "from": 518,
    "to": 519,
    "id": "f0b19cff-4522-4cfa-b457-c3cfbde33f65"
  },
  {
    "from": 527,
    "to": 525,
    "id": "86c69214-dc49-45ba-9eb8-354a4b539574"
  },
  {
    "from": 527,
    "to": 523,
    "id": "5bea6de3-bfa0-4d8b-99bf-8e0a54ae003e"
  },
  {
    "from": 527,
    "to": 522,
    "id": "748a8b1e-f90e-4ced-9f8c-965327be2bbc"
  },
  {
    "from": 527,
    "to": 521,
    "id": "23a18d39-8dbf-4c06-959d-f41f760b5a6e"
  },
  {
    "from": 527,
    "to": 524,
    "id": "bf2bd30c-e0f4-4002-92ef-c7bff8132ab9"
  },
  {
    "from": 512,
    "to": 527,
    "id": "ad59404b-54e4-4069-bcf9-40133b6054b9"
  },
  {
    "from": 500,
    "to": 528,
    "id": "409ef2bb-2c3b-409b-9db1-d8c63fbf888e"
  },
  {
    "from": 528,
    "to": 512,
    "id": "84470396-ce05-47f1-9ece-6346bfda45a0"
  },
  {
    "from": 528,
    "to": 509,
    "id": "a0fcdba5-50d0-4b3b-bc3c-68132f9a8d81"
  },
  {
    "from": 528,
    "to": 511,
    "id": "6f7fab1d-799f-4f36-b67f-bacad537ea4c"
  },
  {
    "from": 528,
    "to": 510,
    "id": "61ca9562-ff69-423d-b0d6-e0301b2bb5a7"
  },
  {
    "from": 500,
    "to": 526,
    "id": "3213c4ce-c475-4b75-9a25-fcd6bc7965ac"
  },
  {
    "from": 526,
    "to": 508,
    "id": "a110e808-4821-4a40-a82f-2ac37edbd07c"
  },
  {
    "from": 526,
    "to": 507,
    "id": "740df9cb-a7e9-4f1c-959f-cf1968414e47"
  },
  {
    "from": 526,
    "to": 506,
    "id": "206a6069-c9eb-4325-af60-00a8d1970d83"
  }
]
export default edges;