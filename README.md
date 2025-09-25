# API CRUD Mahasiswa (Node.js, Express, MongoDB)

Ini adalah proyek RESTful API sederhana untuk mengelola data mahasiswa (CRUD - Create, Read, Update, Delete). Proyek ini dibangun menggunakan Node.js, Express, dan MongoDB, dengan struktur aplikasi yang terorganisir (Model-Service-Controller). Selain itu, terdapat fungsionalitas dasar untuk registrasi dan login pengguna.

## Fitur

  - **Manajemen Mahasiswa**:
      - `CREATE`: Menambahkan data mahasiswa baru.
      - `READ`: Mendapatkan semua data mahasiswa atau berdasarkan ID.
      - `UPDATE`: Memperbarui data mahasiswa berdasarkan ID.
      - `DELETE`: Menghapus data mahasiswa berdasarkan ID.
  - **Autentikasi Pengguna**:
      - `POST /register`: Mendaftarkan pengguna baru.
      - `POST /login`: Login pengguna dan mendapatkan token JWT.
  - **Struktur Profesional**: Mengikuti arsitektur berlapis (Service Layer) untuk memisahkan logika bisnis dari controller.
  - **Konfigurasi Environment**: Menggunakan file `.env` untuk menyimpan konfigurasi sensitif.
  - **Logging**: Implementasi logging sederhana menggunakan Winston.
  - **Format Respons Standar**: Menggunakan utility untuk respons JSON yang konsisten.

## Teknologi yang Digunakan

  - **Backend**: Node.js
  - **Framework**: Express.js
  - **Database**: MongoDB
  - **ODM (Object Data Modeling)**: Mongoose
  - **Password Hashing**: Bcrypt
  - **Autentikasi**: JSON Web Token (JWT)
  - **Environment Variables**: Dotenv
  - **Logging**: Winston

## Struktur Proyek

```
api-crud-mahasiswa/
├── src/
│   ├── config/           # Konfigurasi aplikasi (env loader)
│   ├── controller/       # Menangani request & response HTTP
│   ├── model/            # Skema database Mongoose
│   ├── route/            # Definisi endpoint API
│   ├── service/          # Logika bisnis aplikasi
│   └── util/             # Fungsi helper (logger, response format)
├── index.js              # Entry point aplikasi Express
├── server.js             # Skrip untuk koneksi DB dan menjalankan server
├── .env                  # File environment (tidak di-commit)
├── package.json
└── README.md
```

## Persyaratan

  - [Node.js](https://nodejs.org/) (v14 atau lebih baru direkomendasikan)
  - [MongoDB](https://www.mongodb.com/try/download/community) (Server lokal atau akun MongoDB Atlas)
  - [Postman](https://www.postman.com/downloads/) (Untuk pengujian API)

## Instalasi & Menjalankan Proyek

1.  **Clone repositori ini (atau salin file proyek):**

    ```bash
    git clone https://github.com/username/api-crud-mahasiswa.git
    cd api-crud-mahasiswa
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Buat file `.env` di root proyek:**
    Salin konten dari bawah dan sesuaikan dengan konfigurasi Anda.

    ```env
    # Konfigurasi Server
    PORT=3000

    # Konfigurasi MongoDB
    # Contoh untuk MongoDB lokal:
    MONGO_URI="mongodb://localhost:27017/db_mahasiswa"
    # Contoh untuk MongoDB Atlas:
    # MONGO_URI="mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/db_mahasiswa?retryWrites=true&w=majority"


    # Konfigurasi JWT
    JWT_SECRET="GANTI_DENGAN_KUNCI_RAHASIA_ANDA"
    ```

4.  **Jalankan server:**

    ```bash
    node server.js
    ```

    Server akan berjalan di `http://localhost:3000`.

## Dokumentasi API Endpoint

Semua endpoint memiliki base URL: `/api`

### 1\. Autentikasi Pengguna

| Method | Endpoint             | Deskripsi                           | Body (JSON)                                |
| :----- | :------------------- | :---------------------------------- | :----------------------------------------- |
| `POST` | `/users/register`    | Mendaftarkan pengguna baru.         | `{ "username": "user", "password": "123" }` |
| `POST` | `/users/login`       | Login dan mendapatkan token JWT.    | `{ "username": "user", "password": "123" }` |

### 2\. Manajemen Mahasiswa (CRUD)

| Method   | Endpoint             | Deskripsi                                 | Body (JSON)                                                                                             |
| :------- | :------------------- | :---------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| `POST`   | `/students`          | Menambahkan data mahasiswa baru.          | `{ "nim": "123", "nama": "John Doe", "jurusan": "IT", "angkatan": 2023 }`                                 |
| `GET`    | `/students`          | Mendapatkan semua data mahasiswa.         | -                                                                                                       |
| `GET`    | `/students/:guid`      | Mendapatkan detail mahasiswa by ID.       | -                                                                                                       |
| `PUT`    | `/students/:guid`      | Memperbarui data mahasiswa by ID.         | `{ "nama": "John Smith", "jurusan": "SI" }` (hanya field yang ingin diubah)                               |
| `DELETE` | `/students/:guid`      | Menghapus data mahasiswa by ID.           | -                                                                                                       |

-----
