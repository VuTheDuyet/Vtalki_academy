import React, { useState } from 'react';
import './TeachersSection.css';


const teachersData = [
    {
        id: 1,
        name: 'PHẠM THỊ HUỆ',
        dob: '03/09/1989',
        birthplace: 'thành phố Ninh Bình',
        avatar: './assets/teacher/huệ phạm thị.jpg',
        certificates: [
            'Bằng tốt nghiệp đại học sư phạm I Hà Nội + chứng chỉ đào tạo nghiệp vụ sư phạm',
            'Bằng đại học kinh tế + chứng chỉ kế toán máy',
            'Chứng chỉ tin học và ngoại ngữ Anh'
        ],
        bio: 'Từ bé tôi là một học sinh giỏi văn, tôi có năng khiếu về văn học, lịch sử, địa lý và ngoại ngữ. Đặc biệt là tôi yêu Tiếng Việt, tiếng Anh. Và điều này đã được hiện thực hóa bằng công việc hiện tại của tôi: một giáo viên dạy Tiếng Việt cho người nước ngoài. Tôi muốn người nước ngoài biết đến Tiếng Việt cũng như yêu thích Văn hóa Việt Nam. Dạy tiếng Việt cho người nước ngoài là cách tôi lan tỏa tình yêu tiếng Việt và văn hóa Việt Nam đến cộng đồng bạn bè thế giới!'
    },
    {
        id: 2,
        name: 'TRẦN NHÃ TRÂN',
        dob: '21/06/1995',
        birthplace: 'Thành Phố Hồ Chí Minh',
        avatar: './assets/teacher/Nhã Trân Trần.jpg',
        certificates: [
            'TOPIK 5',
            'Chứng Chỉ Nghiệp Vụ Sư Phạm 2023',
            'Cử nhân Đại học Sư Phạm TPHCM - Ngôn Ngữ Anh'
        ],
        bio: 'Tôi là Nhã Trân,giáo viên tiếng Việt với hơn 4 năm kinh nghiệm giảng dạy cho người nước ngoài. Tôi đã dạy nhiều học viên ở các trình độ khác nhau, từ sơ cấp đến trung cấp, và đặc biệt chuyên dạy tiếng Việt miền Nam. Với phương pháp giảng dạy dễ hiểu, thân thiện và thực tế, tôi luôn cố gắng giúp học viên tự tin giao tiếp và sử dụng tiếng Việt trong cuộc sống hàng ngày. Hy vọng sẽ có cơ hội đồng hành cùng bạn trong hành trình học tiếng Việt!'
    },
    {
        id: 3,
        name: 'Trần Thị Huyền Trang',
        dob: '25/02/2000',
        birthplace: 'Thái Bình',
        avatar: './assets/teacher/Trang Trang.jpg',
        certificates: [
            'Tốt nghiệp Khoa Hàn Quốc Học (ĐH KHXHNV TPHCM)',
            'TOPIK 6',
            'Hoàn thành Khóa đào tạo giáo viên giảng dạy tiếng Hàn của Học viện King Sejong năm 2024'
        ],
        bio: 'Tôi tốt nghiệp Khoa Hàn Quốc học – Trường Đại học Khoa học Xã hội và Nhân văn TP.HCM, đạt TOPIK cấp 6 và đã hoàn thành Khóa đào tạo giáo viên giảng dạy tiếng Hàn của Học viện King Sejong năm 2024. Tôi có kinh nghiệm giảng dạy tiếng Hàn cho người Việt và tiếng Việt cho người Hàn. Đối với tôi, việc giảng dạy không chỉ là cơ hội để áp dụng kiến thức chuyên môn mà còn là cách tạo ra giá trị thực tế – giúp học viên đạt được mục tiêu ngôn ngữ, đồng thời tích lũy thêm kinh nghiệm và phát triển bản thân.'
    },
    {
        id: 4,
        name: 'Hà Đường Hải Yến',
        dob: '11/12/2001',
        birthplace: 'Tây Ninh',
        avatar: './assets/teacher/Yến Hà.jpeg',
        certificates: ['Topik 4'],
        bio: 'Xin chào anh chị! Tôi tên là Hà Đường Hải Yến, hiện tại tôi có Topik 4, đang là phiên dịch hỗ trợ Vendor, đồng thời cũng đang làm giáo viên dạy tiếng Việt cho người Hàn, tôi rất yêu quý những công việc tôi đang làm, cũng đang cố gắng để duy trì và nâng cao chất lượng.'
    },
    {
        id: 5,
        name: 'Vũ Thị Hoa',
        dob: '23/05/1994',
        birthplace: 'Lâm Đồng',
        avatar: './assets/teacher/Hwayoung.jpg',
        certificates: ['Topik 5'],
        bio: 'Xin chào, tôi là Vũ Thị Hoa (Hwa Young), sinh ngày 23/05/1994. Tôi hiện có bằng TOPIK 5 tiếng Hàn và kinh nghiệm giảng dạy tiếng Việt cho người Hàn từ năm 2019 đến nay (hình thức Part-time), ngoài ra tôi còn dạy tiếng Hàn cho người Việt. Từ tháng 11/2021, tôi cũng làm phiên dịch viên tiếng Hàn cho các công ty Hàn Quốc, kinh nghiệm phiên dịch thực tế giúp tôi nắm bắt tốt sự khác biệt văn hóa và cách diễn đạt tự nhiên trong cả hai ngôn ngữ.'
    },
    {
        id: 6,
        name: 'Vũ Thị Ngọc Lan',
        dob: '09/07/1996',
        birthplace: 'Nam Điền, Nam Trực, Nam Định',
        avatar: './assets/teacher/lan vu.jpg',
        certificates: ['Topik 5'],
        bio: 'Xin chào, tôi là Lan, sinh năm 1996. Tôi tốt nghiệp chuyên ngành tiếng Anh trường Đại học Ngoại Ngữ. Tôi có khả năng nói tiếng Anh và tiếng Hàn trôi chảy. Ngoài ra, tôi cũng đã có kinh nghiệm dạy tiếng Anh (cho học sinh ôn thi vào đại học), dạy tiếng Hàn cơ bản (cho người mới bắt đầu học tiếng Hàn) và dạy Tiếng Việt cho trẻ em Hàn Quốc. Tôi mong muốn tiếp tục công việc giảng dạy để kết nối văn hóa hai nước, đồng thời tích lũy kinh nghiệm cho sự nghiệp giảng dạy trong tương lai.'
    },
    {
        id: 7,
        name: 'Dương Bội Dung',
        dob: '04/10/2000',
        birthplace: 'TP. Hồ Chí Minh',
        avatar: './assets/teacher/Bội Dung Dương.jpg',
        certificates: ['TOEIC'],
        bio: 'Xin chào, tôi là Dương Bội Dung. Với kinh nghiệm giảng dạy tiếng Anh và kiến thức tiếng Trung, hiện tại tôi đang giảng dạy tiếng Việt cho người nước ngoài được 6 tháng. Tôi luôn có niềm đam mê đặc biệt với ngôn ngữ và công việc giảng dạy, bởi tôi tin rằng ngôn ngữ không chỉ là công cụ giao tiếp mà còn là cầu nối văn hóa giữa các quốc gia.'
    },
    {
        id: 8,
        name: 'Trần Nguyễn Minh Duyên',
        dob: '02/02/2003',
        birthplace: 'Ninh Thuận, Việt Nam',
        avatar: './assets/teacher/Duyên Trần.jpg',
        certificates: [
            '12 năm liền đạt danh hiệu Học sinh Giỏi',
            'Cựu học sinh lớp chuyên Toán',
            'Học bổng toàn phần đầu vào – Đại học Tôn Đức Thắng',
            'Học bổng học tập ba năm liên tiếp: 2021–2022, 2022–2023, 2023–2024',
            'IELTS 7.0',
            'Chứng chỉ MOS Word và Excel'
        ],
        bio: 'Xin chào! Mình là Duyên – giáo viên dạy tiếng Việt với đam mê giúp người học chinh phục ngôn ngữ và văn hóa Việt Nam một cách tự nhiên, sinh động và đầy cảm hứng!'
    },
    {
        "id": 9,
        "name": "Nguyễn Linh Nhi",
        "dob": "01/07/2000",
        "birthplace": "Thành phố Bạc Liêu",
        "avatar": "./assets/teacher/Duyên Trần.jpg",
        "certificates": ["TOPIK 5"],
        "bio": "Xin chào, tôi tên là Nguyễn Linh Nhi, tốt nghiệp chuyên ngành tiếng Hàn của trường Đại Việt Sài Gòn. Tôi đã có kinh nghiệm làm việc ở công ty Hàn Quốc 3 năm và dạy tiếng Việt cho người Hàn Quốc được hơn 1 năm. Tôi là giáo viên giọng miền Nam và có chứng chỉ TOPIK 5."
    },
    {
        "id": 10,
        "name": "Nguyễn Thị Hoàng Ngân",
        "dob": "01/12/2000",
        "birthplace": "Bệnh viện tỉnh Tây Ninh",
        "avatar": "./assets/teacher/Ngân Hoàng.jpg",
        "certificates": ["TOPIK 4"],
        "bio": "Xin chào! Mình là Ngân - một giáo viên dạy tiếng Hàn có kinh nghiệm gần 5 năm dạy tiếng Hàn. Mình từng dạy các bạn du học sinh Hàn Quốc và đã có gần 50 bạn do chính mình dạy và đi du học thành công. Hiện tại mình tập trung dạy các lớp tiếng Hàn và tiếng Việt giao tiếp thực chiến. Không chỉ trên sách mà còn là những dạng giao tiếp đời sống thông dụng nhất tùy nhu cầu của học viên như giao tiếp hàng ngày, giao tiếp ngành dịch vụ, giao tiếp công sở... Ngoài ra còn có các lớp luyện các kỹ năng biên - phiên dịch tùy theo nhu cầu học viên. Chỉ cần bạn nói lên nhu cầu học tiếng Hàn hay tiếng Việt của bản thân mình sẵn sàng đồng hành cùng bạn trong hành trình chinh phục tiếng Hàn và tiếng Việt."
    },
    {
        "id": 11,
        "name": "Nguyễn Thị Mỹ Ngọc",
        "dob": "08/06/1999",
        "birthplace": "An Giang",
        "avatar": "./assets/teacher/Mỹ Ngọc Nguyễn.jpg",
        "certificates": ["Topik 5"],
        "bio": "Tốt nghiệp khoa tiếng Hàn trường Đại học Sư phạm TPHCM. Có kinh nghiệm 4 năm trong việc dạy tiếng Việt cho người Hàn và tiếng Hàn cho người Việt."
    },
    {
        "id": 12,
        "name": "NGUYỄN THỊ NGA",
        "dob": "21/08/1994",
        "birthplace": "BẮC NINH",
        "avatar": "./assets/teacher/Nga Nguyễn.jpg",
        "certificates": ["KHÔNG CÓ"],
        "bio": "Mình hiện đang làm công việc thông dịch viên cho một công ty Hàn. Mình đã dạy một số bạn Hàn Quốc phát âm tiếng Hàn và giao tiếp tiếng việt cùng nhau."
    },
    {
        "id": 13,
        "name": "DƯƠNG HIẾU NHÂN",
        "dob": "22/05/2001",
        "birthplace": "Vĩnh Long",
        "avatar": "./assets/teacher/Nhan Hieu.jpeg",
        "certificates": ["Topik 4"],
        "bio": "Xin chào tôi là Dương Hiếu Nhân tôi từng sinh sống và học tập tại Hàn 2 năm và hiện đang làm giáo viên cho trung tâm Vtalki."
    }
    // Các giáo viên tiếp theo bạn có thể thêm vào từ đây.
];


const ITEMS_PER_PAGE = 4;

const TeachersSection = () => {
    const [selectedTeacher, setSelectedTeacher] = useState(teachersData[0]);
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(teachersData.length / ITEMS_PER_PAGE);
    const startIdx = (page - 1) * ITEMS_PER_PAGE;
    const currentTeachers = teachersData.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    const handlePageChange = (direction) => {
        if (direction === 'prev' && page > 1) setPage(page - 1);
        if (direction === 'next' && page < totalPages) setPage(page + 1);
    };

    return (
        <section className="teachers-wrapper">
            <div className="teacher-detail">
                <div className="teacher-avatar">
                    <img src={selectedTeacher.avatar} alt={selectedTeacher.name} />
                </div>
                <div className="teacher-info">
                    <h2 className="teacher-name">{selectedTeacher.name}</h2>

                    {/* Thông tin cá nhân */}
                    <div className="teacher-personal-info">
                        <p><strong>Date of Birth:</strong> {selectedTeacher.dob}</p>
                        <p><strong>Birthplace:</strong> {selectedTeacher.birthplace}</p>
                    </div>

                    {/* Chứng chỉ */}
                    <div className="teacher-certificates">
                        <h3>Certificates:</h3>
                        <ul>
                            {selectedTeacher.certificates && selectedTeacher.certificates.length > 0 ? (
                                selectedTeacher.certificates.map((certificate, index) => (
                                    <li key={index}>{certificate}</li>
                                ))
                            ) : (
                                <li>No certificates available</li>
                            )}
                        </ul>
                    </div>

                    {/* Tiểu sử */}
                    <p className="teacher-bio">{selectedTeacher.bio}</p>
                </div>
            </div>



            <div className="teacher-list">
                <h3>Danh sách giáo viên</h3>
                <div className="teacher-grid">
                    {currentTeachers.map((teacher) => (
                        <div
                            key={teacher.id}
                            className={`teacher-card ${selectedTeacher.id === teacher.id ? 'active' : ''}`}
                            onClick={() => setSelectedTeacher(teacher)}
                        >
                            <img src={teacher.avatar} alt={teacher.name} />
                            <h4>{teacher.name}</h4>
                            <p>{teacher.bio.slice(0, 60)}...</p>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    <button onClick={() => handlePageChange('prev')} disabled={page === 1}>←</button>
                    <span>Trang {page} / {totalPages}</span>
                    <button onClick={() => handlePageChange('next')} disabled={page === totalPages}>→</button>
                </div>
            </div>
        </section>
    );
};

export default TeachersSection;
