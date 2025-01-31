import React, { useEffect, useState } from 'react'
import SectionCatalog from '../../components/catalog/sections/SectionCatalog/SectionCatalog'
import Layout from '../../components/global/Layout'
import { BASE_URL } from '../../utils/config'

const STORAGE_KEY = "books"; // Nama localStorage
const STORAGE_TIMESTAMP_KEY = "books_timestamp"; // Nama timestamp
const EXPIRY_DAYS = 2; // Set waktu kadaluarsa dalam hari

const CatalogList = () => {
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const [limit] = useState(12);

    useEffect(() => {
        const ENDPOINTS_URL = `${BASE_URL}/api/catalogue/getPenggerakTextBooks?limit=1000&type_pdf&order_by=updated_at`;

        const getBooks = async () => {
            setLoading(true);

            try {
                // Cek timestamp terakhir penyimpanan
                const lastSavedTime = localStorage.getItem(STORAGE_TIMESTAMP_KEY);
                const currentTime = new Date().getTime();
                const expiryTime = EXPIRY_DAYS * 24 * 60 * 60 * 1000; // 2 hari dalam milidetik

                if (lastSavedTime && currentTime - lastSavedTime < expiryTime) {
                    // Masih dalam periode cache, gunakan data dari localStorage
                    const cachedData = localStorage.getItem(STORAGE_KEY);
                    if (cachedData) {
                        console.log("Menggunakan data dari localStorage...");
                        setBooks(JSON.parse(cachedData));
                        setLoading(false);
                        return;
                    }
                } else {
                    // Jika sudah kadaluarsa atau belum ada data, ambil ulang dari API
                    const response = await fetch(ENDPOINTS_URL);

                    if (!response.ok) throw new Error("Gagal mengambil data dari API");

                    const responseData = await response.json();
                    setBooks(responseData.results);
                    setLoading(false);

                    // Simpan data baru ke localStorage dengan timestamp
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(responseData.results));
                    localStorage.setItem(STORAGE_TIMESTAMP_KEY, currentTime.toString());

                    console.log("Data berhasil disimpan ke localStorage");
                }
            } catch (err) {
                console.error("Error fetching data:", err.message);
                setLoading(false);
            }
        };

        getBooks();
    }, []);

    return (
        <Layout>
            <SectionCatalog
                hideSidebar={true}
                books={books}
                loading={loading}
                skeletonCount={limit}
                typeBook={'type_pdf'}
            />
        </Layout>
    )
}

export default CatalogList