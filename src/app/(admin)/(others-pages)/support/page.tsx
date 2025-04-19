import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Hỗ trợ khách hàng | Halo-Shop",
  description:
    "Thông tin chi tiết về chính sách hỗ trợ khách hàng của Halo-Shop",
};

export default function CustomerSupport() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Hỗ trợ khách hàng" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full">
          <h3 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90 sm:text-2xl">
            Hỗ trợ khách hàng tận tâm từ Halo-Shop
          </h3>
          <p className="mb-6 text-xl/8 text-gray-500 dark:text-gray-400">
            Tại Halo-Shop, sự hài lòng của khách hàng là ưu tiên hàng đầu. Đội
            ngũ hỗ trợ khách hàng chuyên nghiệp và nhiệt tình của chúng tôi luôn
            sẵn sàng giải đáp mọi thắc mắc và hỗ trợ bạn trong suốt quá trình
            mua sắm.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white/80">
                Các kênh hỗ trợ khách hàng:
              </h4>
              <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
                <li>
                  <strong>Hotline:</strong> Gọi ngay đến số điện thoại{" "}
                  <span className="text-theme-primary font-semibold">
                    1900 XXXX
                  </span>{" "}
                  để được hỗ trợ trực tiếp từ nhân viên của chúng tôi (Thời gian
                  làm việc: 8:00 - 22:00 tất cả các ngày trong tuần).
                </li>
                <li>
                  <strong>Email:</strong> Gửi yêu cầu hỗ trợ qua email đến địa
                  chỉ{" "}
                  <span className="text-theme-primary font-semibold">
                    support@halo-shop.vn
                  </span>
                  . Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
                </li>
                <li>
                  <strong>Chat trực tuyến:</strong> Truy cập website của chúng
                  tôi và sử dụng chức năng chat trực tuyến để được hỗ trợ ngay
                  lập tức bởi các tư vấn viên.
                </li>
                <li>
                  <strong>Mạng xã hội:</strong> Liên hệ với chúng tôi qua các
                  trang mạng xã hội chính thức của Halo-Shop (Facebook,
                  Instagram). Đội ngũ quản trị viên sẽ nhanh chóng phản hồi tin
                  nhắn của bạn.
                </li>
                <li>
                  <strong>Hệ thống cửa hàng:</strong> Ghé thăm trực tiếp các cửa
                  hàng của Halo-Shop để được nhân viên tư vấn và hỗ trợ trực
                  tiếp. Xem địa chỉ các cửa hàng{" "}
                  <a href="#" className="text-theme-primary hover:underline">
                    tại đây
                  </a>
                  .
                </li>
                <li>
                  <strong>Trung tâm hỗ trợ trực tuyến:</strong> Tham khảo các
                  câu hỏi thường gặp (FAQ) và hướng dẫn chi tiết trên trang{" "}
                  <a href="#" className="text-theme-primary hover:underline">
                    Trung tâm hỗ trợ
                  </a>{" "}
                  của chúng tôi.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white/80">
                Chúng tôi có thể hỗ trợ bạn những gì?
              </h4>
              <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
                <li>Tư vấn về sản phẩm, size và kiểu dáng phù hợp.</li>
                <li>Hỗ trợ thông tin về tình trạng đơn hàng và giao nhận.</li>
                <li>
                  Giải đáp thắc mắc về chính sách bán hàng, đổi trả và bảo hành.
                </li>
                <li>Hướng dẫn các thủ tục mua hàng và thanh toán.</li>
                <li>
                  Tiếp nhận và xử lý các phản hồi, khiếu nại của khách hàng.
                </li>
                <li>
                  Hỗ trợ các vấn đề kỹ thuật liên quan đến website và ứng dụng.
                </li>
                <li>
                  Cung cấp thông tin về các chương trình khuyến mãi và ưu đãi
                  hiện có.
                </li>
              </ul>
            </div>

            <p className="text-xl/8 text-gray-500 dark:text-gray-400">
              Đừng ngần ngại liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi
              hoặc cần hỗ trợ. Halo-Shop luôn sẵn lòng phục vụ bạn một cách tốt
              nhất!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
