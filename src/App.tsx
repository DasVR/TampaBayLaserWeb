import { Route, Routes } from "react-router-dom";
import { RootLayout } from "@/shell/RootLayout";
import { AboutPage } from "@/routes/about/AboutPage";
import { BlogPage } from "@/routes/blog/BlogPage";
import { ContactPage } from "@/routes/contact/ContactPage";
import { EventsPage } from "@/routes/events/EventsPage";
import { HomePage } from "@/routes/home/HomePage";
import { ServicesPage } from "@/routes/services/ServicesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
