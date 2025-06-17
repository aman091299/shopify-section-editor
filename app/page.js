"use client"
import HomeSectionRenderer from "./components/HomeSectionRender";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./utils/constants";

export default function HomePage() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const res = await axios.get(BASE_URL+"/home-sections");
        console.log("res..",res)
        setSections(res.data.sections);
      } catch (err) {
        console.error("Failed to fetch home sections home page", err);
      }
    };
    fetchSections();
  }, []);

  return (
    <div>
      {sections.map((section) => (
        <HomeSectionRenderer key={section._id} section={section} />
      ))}
    </div>
  );
}
