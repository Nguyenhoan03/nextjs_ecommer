import "@/styles/admin/Admin.scss";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function AdminTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Header />
        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}
