"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../../form/Label";
import Alert from "@/components/ui/alert/Alert";
// import Input from "../../form/input/InputField";
// import Select from "../../form/Select";
// import Button from "@/components/ui/button/Button";
// import { CalenderIcon} from "../../../icons";
// import DropzoneComponent from "@/components/form/form-elements/DropZone";
// import FileInput from "@/components/form/input/FileInput";
// import TextArenHH from "@/components/form/form-elements/TextArenaHH";
export default function Tintuc2() {
  return (
    <ComponentCard title="Quy định Halo-Shop">
      <div className="space-y-6">
        <Label>Các khoảng mục yêu cầu </Label>
        <Alert
          variant="info"
          title="1. Tính chính xác và khách quan:"
          message={`
            - Kiểm chứng thông tin: Xác minh thông tin từ nhiều nguồn đáng tin cậy (cơ quan báo chí uy tín, tổ chức chính phủ, phi chính phủ) trước khi viết.<br/>
            - Tránh thiên vị: Trình bày thông tin một cách khách quan, không đưa ý kiến cá nhân vào bài viết. Sử dụng ngôn ngữ trung lập, tránh từ ngữ mang tính cảm xúc.<br/>
            - Cân bằng thông tin: Đưa ra các luồng ý kiến khác nhau (nếu có) để độc giả có cái nhìn toàn diện. Phân biệt rõ ràng giữa sự kiện và ý kiến.<br/>
            - Nguồn tin rõ ràng: Trích dẫn nguồn tin một cách chính xác và đầy đủ. Sửa sai và đính chính kịp thời khi có sai sót.
            `}
          showLink={false}
        />

        <Alert
          variant="info"
          title="2. Tính thời sự và cập nhật:"
          message={`
            - Nắm bắt tin tức: Theo dõi các sự kiện đang diễn ra để đưa tin kịp thời. Sử dụng các công cụ hỗ trợ (tìm kiếm, mạng xã hội, phần mềm theo dõi tin tức).<br/>
            - Cập nhật liên tục: Bổ sung thông tin mới khi có diễn biến mới của sự kiện. Ưu tiên nguồn tin chính thống.
            `}
          showLink={false}
        />

        <Alert
          variant="info"
          title="3. Tính rõ ràng và dễ hiểu:"
          message={`
            - Ngôn ngữ đơn giản: Sử dụng ngôn ngữ phổ thông, dễ hiểu, tránh dùng từ ngữ chuyên ngành quá nhiều. Câu văn ngắn gọn, súc tích.<br/>
            - Cấu trúc logic: Sắp xếp thông tin theo trình tự logic, dễ theo dõi. Sử dụng dấu câu, dấu chấm phẩy hợp lý.<br/>
            - Tóm tắt thông tin: Đưa ra thông tin quan trọng nhất ở đầu bài viết.<br/>
            - Tiêu đề hấp dẫn: Tiêu đề ngắn gọn, súc tích, thu hút sự chú ý của độc giả.<br/>
            - Phương tiện trực quan: Sử dụng bảng biểu, đồ thị, video để minh họa.
            `}
          showLink={false}
        />

        <Alert
          variant="info"
          title="4. Tính đạo đức và trách nhiệm:"
          message={`
            - Tôn trọng sự thật: Không xuyên tạc, bóp méo thông tin.<br/>
            - Bảo vệ nguồn tin: Giữ bí mật nguồn tin khi cần thiết.<br/>
            - Chịu trách nhiệm: Chịu trách nhiệm về những thông tin đã đưa ra.<br/>
            - Không xâm phạm đời tư: Không đưa tin xâm phạm đến đời tư của người khác. Tôn trọng quyền riêng tư.<br/>
            - Thông tin nhạy cảm: Cẩn trọng với các vấn đề liên quan đến tôn giáo, chính trị, sắc tộc.<br/>
            - Tránh xung đột lợi ích: Không viết bài về các vấn đề mà bạn có lợi ích cá nhân.
            `}
          showLink={false}
        />

        <Alert
          variant="info"
          title="5. Hình thức trình bày:"
          message={`
            - Bố cục rõ ràng: Chia bài viết thành các đoạn văn ngắn gọn, có tiêu đề phụ.<br/>
            - Sử dụng hình ảnh: Hình ảnh minh họa phù hợp, có chú thích rõ ràng.<br/>
            - Kiểm tra lỗi chính tả: Đảm bảo bài viết không có lỗi chính tả và ngữ pháp.<br/>
            - Phông chữ, cỡ chữ: Sử dụng phông chữ, cỡ chữ phù hợp, khoảng trắng hợp lý.<br/>
            - Tối ưu hóa SEO: Tối ưu hóa bài viết cho các công cụ tìm kiếm.
            `}
          showLink={false}
        />

        <Alert
          variant="info"
          title="6. Các quy tắc '5W và 1H':"
          message={`
            - Who (Ai): Ai là người liên quan đến sự kiện?<br/>
            - What (Cái gì): Sự kiện gì đã xảy ra?<br/>
            - Where (Ở đâu): Sự kiện xảy ra ở đâu?<br/>
            - When (Khi nào): Sự kiện xảy ra khi nào?<br/>
            - Why (Tại sao): Tại sao sự kiện lại xảy ra?<br/>
            - How (Như thế nào): Sự kiện diễn ra như thế nào?<br/>
            - Đảm bảo đầy đủ: Đảm bảo tất cả các yếu tố "5W và 1H" được đề cập đầy đủ trong bài viết.
            `}
          showLink={false}
        />
      </div>
    </ComponentCard>
  );
}
