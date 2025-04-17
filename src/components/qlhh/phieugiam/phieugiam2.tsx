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
export default function Phieugiam2() {
  return (
    <ComponentCard title="Quy định Halo-Shop">
      <div className="space-y-6">
        <Label>Các khoảng mục yêu cầu </Label>
        <Alert
          variant="info"
          title="1. Tuân thủ pháp luật:"
          message={`
                Luật Thương mại:<br/>
                - Đảm bảo chương trình khuyến mại không vi phạm các quy định về cạnh tranh không lành mạnh, bảo vệ quyền lợi người tiêu dùng.<br/>
                - Cung cấp thông tin đầy đủ, chính xác về chương trình khuyến mại.<br/>
                Nghị định 81/2018/NĐ-CP:<br/>
                - Quy định về hoạt động xúc tiến thương mại, trong đó có các hình thức khuyến mại như giảm giá, tặng quà, v.v.<br/>
                - Cần lưu ý về mức giảm giá tối đa, thời gian khuyến mại, và các quy định khác liên quan.
            `}
          showLink={false}
        />

        <Alert
          variant="info"
          title="2. Nội dung của voucher, coupon:"
          message={`
                Thông tin rõ ràng:<br/>
                - Giá trị giảm giá (số tiền hoặc phần trăm).<br/>
                - Điều kiện áp dụng (sản phẩm, dịch vụ, thời gian, địa điểm).<br/>
                - Thời hạn sử dụng.<br/>
                - Mã voucher/coupon.<br/>
                - Thông tin liên hệ (nếu cần).<br/>
                Ngôn ngữ dễ hiểu:<br/>
                - Tránh sử dụng ngôn ngữ gây hiểu nhầm.<br/>
                - Nêu rõ các điều khoản và điều kiện áp dụng.
            `}
          showLink={false}
        />

        <Alert
          variant="info"
          title="3. Hình thức phát hành:"
          message={`
                Kênh phát hành:<br/>
                - Phát hành trực tiếp tại cửa hàng.<br/>
                - Phát hành trực tuyến qua website, ứng dụng, email, mạng xã hội.<br/>
                - Hợp tác với các đối tác để phát hành.<br/>
                Bảo mật:<br/>
                - Đảm bảo mã voucher/coupon không bị sao chép, giả mạo.<br/>
                - Sử dụng các biện pháp bảo mật khi phát hành trực tuyến.
            `}
          showLink={false}
        />

        <Alert
          variant="info"
          title="4. Lưu ý quan trọng:"
          message={`
                Mức giảm giá tối đa:<br/>
                - Theo quy định, mức giảm giá tối đa đối với hàng hóa, dịch vụ được khuyến mại không được vượt quá 50% giá hàng hóa, dịch vụ đó ngay trước thời gian khuyến mại.<br/>
                - Tuy nhiên, trong một số trường hợp đặc biệt, mức giảm giá có thể lên tới 100%.<br/>
                Thời gian khuyến mại:<br/>
                - Tổng thời gian thực hiện khuyến mại bằng hình thức giảm giá đối với một loại nhãn hiệu hàng hóa, dịch vụ không được vượt quá 120 ngày trong một năm.<br/>
                Trách nhiệm:<br/>
                - Doanh nghiệp chịu trách nhiệm về tính chính xác và hợp pháp của chương trình khuyến mại.<br/>
                - Giải quyết các khiếu nại của khách hàng liên quan đến voucher, coupon.<br/>
                Để đảm bảo tuân thủ đầy đủ, bạn nên tham khảo thêm:<br/>
                - Luật Thương mại 2005.<br/>
                - Nghị định 81/2018/NĐ-CP về hoạt động xúc tiến thương mại.<br/>
                - Các văn bản pháp luật liên quan khác.
            `}
          showLink={false}
        />
      </div>
    </ComponentCard>
  );
}
