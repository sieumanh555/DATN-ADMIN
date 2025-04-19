import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Quy định công ty | Halo-Shop",
  description: "Các quy định chung của công ty Halo-Shop",
};

export default function CompanyRegulations() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Quy định công ty" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full">
          <h3 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90 sm:text-2xl">
            Quy định chung của công ty Halo-Shop
          </h3>
          <p className="mb-6 text-xl/8 text-gray-500 dark:text-gray-400">
            Chào mừng quý khách đến với Halo-Shop. Để đảm bảo môi trường mua sắm
            văn minh, an toàn và hiệu quả, chúng tôi xin thông báo các quy định
            chung sau:
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white/80">
                Quy định về sản phẩm và chất lượng:
              </h4>
              <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
                <li>
                  Halo-Shop cam kết cung cấp sản phẩm giày dép chính hãng, có
                  nguồn gốc xuất xứ rõ ràng và đảm bảo chất lượng theo tiêu
                  chuẩn nhà sản xuất.
                </li>
                <li>
                  Khách hàng có trách nhiệm kiểm tra kỹ sản phẩm trước khi thanh
                  toán. Mọi khiếu nại về lỗi sản phẩm sau khi đã thanh toán sẽ
                  được xử lý theo chính sách đổi trả của công ty.
                </li>
                <li>
                  Hình ảnh và thông tin sản phẩm trên website/ứng dụng có thể có
                  sự khác biệt nhỏ so với sản phẩm thực tế do điều kiện ánh sáng
                  và thiết bị hiển thị.
                </li>
                <li>
                  Halo-Shop có quyền thay đổi thông số kỹ thuật, thiết kế và giá
                  cả của sản phẩm mà không cần thông báo trước.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white/80">
                Quy định về mua hàng và thanh toán:
              </h4>
              <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
                <li>
                  Khách hàng có thể mua hàng trực tuyến trên website/ứng dụng
                  hoặc trực tiếp tại các cửa hàng của Halo-Shop.
                </li>
                <li>
                  Các hình thức thanh toán được chấp nhận bao gồm: tiền mặt, thẻ
                  ngân hàng, chuyển khoản và các ví điện tử được tích hợp.
                </li>
                <li>
                  Khách hàng có trách nhiệm thanh toán đầy đủ giá trị đơn hàng,
                  bao gồm cả phí vận chuyển (nếu có).
                </li>
                <li>
                  Halo-Shop có quyền từ chối đơn hàng nếu phát hiện thông tin
                  khách hàng không chính xác hoặc có dấu hiệu gian lận.
                </li>
                <li>
                  Hóa đơn mua hàng sẽ được cung cấp cho khách hàng sau khi thanh
                  toán thành công.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white/80">
                Quy định về đổi trả và bảo hành:
              </h4>
              <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
                <li>
                  Chính sách đổi trả được áp dụng trong vòng 7 ngày kể từ ngày
                  mua hàng theo các điều kiện quy định chi tiết{" "}
                  <a href="#" className="text-theme-primary hover:underline">
                    tại đây
                  </a>
                  .
                </li>
                <li>
                  Sản phẩm đổi trả phải còn mới, chưa qua sử dụng, còn nguyên
                  tem mác và hóa đơn mua hàng.
                </li>
                <li>
                  Chính sách bảo hành được áp dụng cho một số sản phẩm nhất định
                  theo thời gian và điều kiện bảo hành của nhà sản xuất. Thông
                  tin chi tiết về bảo hành được cung cấp kèm theo sản phẩm.
                </li>
                <li>
                  Halo-Shop có quyền từ chối đổi trả hoặc bảo hành nếu sản phẩm
                  không đáp ứng các điều kiện quy định.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white/80">
                Quy định về bảo mật thông tin:
              </h4>
              <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
                <li>
                  Halo-Shop cam kết bảo mật tuyệt đối thông tin cá nhân của
                  khách hàng theo chính sách bảo mật được công bố trên
                  website/ứng dụng.
                </li>
                <li>
                  Chúng tôi không chia sẻ thông tin khách hàng cho bất kỳ bên
                  thứ ba nào khi chưa có sự đồng ý của khách hàng, trừ các
                  trường hợp pháp luật có quy định.
                </li>
                <li>
                  Khách hàng có trách nhiệm bảo mật thông tin tài khoản và mật
                  khẩu của mình. Halo-Shop không chịu trách nhiệm cho bất kỳ tổn
                  thất nào do việc lộ thông tin tài khoản từ phía khách hàng.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white/80">
                Quy định khác:
              </h4>
              <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
                <li>
                  Khách hàng có trách nhiệm tuân thủ các quy định và hướng dẫn
                  của nhân viên Halo-Shop tại cửa hàng.
                </li>
                <li>
                  Mọi hành vi gây rối, làm ảnh hưởng đến hoạt động kinh doanh
                  hoặc uy tín của Halo-Shop đều bị nghiêm cấm.
                </li>
                <li>
                  Halo-Shop có quyền thay đổi các quy định này mà không cần
                  thông báo trước. Các thay đổi sẽ được cập nhật trên
                  website/ứng dụng của công ty.
                </li>
                <li>
                  Việc tiếp tục mua sắm và sử dụng dịch vụ của Halo-Shop đồng
                  nghĩa với việc khách hàng chấp nhận các quy định này.
                </li>
              </ul>
            </div>

            <p className="text-xl/8 text-gray-500 dark:text-gray-400">
              Xin chân thành cảm ơn quý khách đã tin tưởng và lựa chọn
              Halo-Shop. Chúng tôi luôn nỗ lực để mang đến trải nghiệm mua sắm
              tốt nhất cho bạn!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
