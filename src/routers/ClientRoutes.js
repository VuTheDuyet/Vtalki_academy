import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientLayout from '../layouts/ClientLayout';

import Home from '../pages/client/Home';
import Courses from '../pages/client/courses/index.js';
import Login from '../pages/client/Login';
import CoursesVietnamese from '../pages/client/courses/vietnamese';
import KoreanCourse from '../pages/client/courses/korean';
import EnglishCourse from '../pages/client/courses/english';
import NewsDetails1 from '../components/newsdetails1';
import NewsDetails2 from '../components/newsdetails2';
import NewsDetails3 from '../components/newsdetails3';
import NewsDetails4 from '../components/newsdetails4';
import NewsDetails5 from '../components/newsdetails5';
import AllTeacher from '../pages/teachers/AllTeacher.js';
import AboutUs from '../pages/client/aboutus/aboutus.js';
import News from '../pages/client/news/News.js';
import Contact from '../pages/client/contact/Contact.js';
import FormContact from '../pages/client/contact/Formcontact.js';
import Data from '../context/Data.js';

function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="login" element={<Login />} />


        <Route path="self-study" element={<Courses />} />
        <Route path="datasheet" element={<Data />} />
        <Route path="self-study/vietnamese" element={<CoursesVietnamese />} />
        <Route path="self-study/korean" element={<KoreanCourse />} />
        <Route path="self-study/english" element={<EnglishCourse />} />

        {/* <Route path="books" element={<Contact />} />
        <Route path="books/all" element={<Contact />} />
        <Route path="books/recommended" element={<Contact />} />
        <Route path="books/vietnamese" element={<Contact />} />
        <Route path="books/korean" element={<Contact />} />
        <Route path="books/english" element={<Contact />} /> */}

        <Route path="teacher-training" element={<AllTeacher />} />
        <Route path="teacher-training/programs" element={<AllTeacher />} />
        {/* <Route path="teacher-training/korean" element={<Contact />} />
        <Route path="teacher-training/vietnamese" element={<Contact />} />
        <Route path="teacher-training/english" element={<Contact />} /> */}

        <Route path="about" element={<AboutUs />} />
        <Route path="about/overview" element={<AboutUs />} />
        {/* <Route path="about/team" element={<Contact />} />
        <Route path="about/mission" element={<Contact />} /> */}

        <Route path="news" element={<News />} />
        <Route path="/news/han-quoc-tang-nhu-cau-lao-dong" element={<NewsDetails1 />} />
        <Route path="/news/nguoi-nuoc-ngoai-hoc-tieng-viet-tphcm" element={<NewsDetails2 />} />
        <Route path="/news/ky-thi-topik-2025-mo-dang-ky" element={<NewsDetails3 />} />
        <Route path="/news/nguoi-han-hoc-tieng-viet-kinh-doanh" element={<NewsDetails4 />} />
        <Route path="/news/vtalki-ra-mat-app-hoc-tieng-han-viet" element={<NewsDetails5 />} />


        <Route path="news/events" element={<News />} />
        <Route path="news/blogs" element={<News />} />
        {/* <Route path="blog/tips" element={<Contact />} />
        <Route path="news/announcements" element={<Contact />} />
        <Route path="careers" element={<Contact />} /> */}

        <Route path="contact" element={<Contact />} />
        <Route path="contact/form" element={<FormContact />} />
        <Route path="contact/info" element={<Contact />} />
        {/* <Route path="contact/social" element={<Contact />} /> */}

        <Route path="login" element={<Contact />} />
        <Route path="register" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default ClientRoutes;
