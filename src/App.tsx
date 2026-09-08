import { Route, Routes } from "react-router-dom";
import { RootLayout } from "@/shell/RootLayout";
import { AboutPage } from "@/routes/about/AboutPage";
import { BlogPage } from "@/routes/blog/BlogPage";
import { BlogPostPage } from "@/routes/blog/BlogPostPage";
import { ContactPage } from "@/routes/contact/ContactPage";
import { EventsPage } from "@/routes/events/EventsPage";
import { HomePage } from "@/routes/home/HomePage";
import { ServiceDetailPage } from "@/routes/services/ServiceDetailPage";
import { ServicesPage } from "@/routes/services/ServicesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
