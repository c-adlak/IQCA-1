"use client"

import Link from "next/link";
import { useState } from "react";
import BoardMembers from "../components/BoardMembers";
import CourseManagement from "../components/CourseManagement";
import ContactInfo from "../components/ContactInfo";
import SuccessNumbers from "../components/SuccessNumbers";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <div className="flex">
      <div className="w-64 bg-gray-800 text-white h-screen p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <ul>
          <li
            className={`mb-4 cursor-pointer ${activeTab === "courses" ? "bg-blue-600 p-2 rounded" : ""}`}
            onClick={() => setActiveTab("courses")}
          >
            <Link href="#">Courses</Link>
          </li>
          <li
            className={`mb-4 cursor-pointer ${activeTab === "boardMembers" ? "bg-blue-600 p-2 rounded" : ""}`}
            onClick={() => setActiveTab("boardMembers")}
          >
            <Link href="#">Board Members</Link>
          </li>
          <li
            className={`mb-4 cursor-pointer ${activeTab === "successNumbers" ? "bg-blue-600 p-2 rounded" : ""}`}
            onClick={() => setActiveTab("successNumbers")}
          >
            <Link href="#">Success Numbers</Link>
          </li>
          <li
            className={`mb-4 cursor-pointer ${activeTab === "contactInfo" ? "bg-blue-600 p-2 rounded" : ""}`}
            onClick={() => setActiveTab("contactInfo")}
          >
            <Link href="#">Contact Information</Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-6 bg-gray-100">
        {activeTab === "courses" && <CourseManagement />}
        {activeTab === "boardMembers" && <BoardMembers />}
        {activeTab === "successNumbers" && <SuccessNumbers />}
        {activeTab === "contactInfo" && <ContactInfo />}
      </div>
    </div>
  );
};

export default Sidebar;
