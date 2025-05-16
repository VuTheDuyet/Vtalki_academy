import React, { useEffect, useState } from 'react';

export default function Data() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://6780d4f685151f714b08157f.mockapi.io/category')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Đang tải dữ liệu...</div>;
    if (error) return <div>Lỗi: {error}</div>;

    return (
        <div>
            <h1>Danh sách dữ liệu</h1>
            {data.length === 0 && <p>Không có dữ liệu.</p>}
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <strong>{item.name}-{item.gmail}-{item.number}</strong> - {item.note || 'Không có ghi chú'}
                    </li>
                ))}
            </ul>
        </div>
    );
}
