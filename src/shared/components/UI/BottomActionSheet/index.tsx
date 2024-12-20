interface MenuItem {
  label: string;
  color?: string;
  action: () => void;
}

interface BottomActionSheetProps {
  menuItems: MenuItem[];
  showCancelButton?: boolean;
  onClose: () => void;
}

export default function BottomActionSheet({
  menuItems,
  showCancelButton = true,
  onClose,
}: BottomActionSheetProps) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-end"
      onClick={handleClose} // 외부 클릭 시 닫힘
    >
      <div
        className="w-full max-w-580 mb-117 mx-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 메뉴 리스트 */}
        <ul className="divide-y divide-customGray-300 bg-white rounded-10 shadow-lg overflow-hidden">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center justify-center h-45 p-10 cursor-pointer ${item.color ? `text-${item.color}` : "text-customGray-850"}`}
              onClick={item.action}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* 취소 버튼 */}
        {showCancelButton && (
          <button
            className="w-full h-45 p-10 mt-10 text-center bg-white rounded-10 text-customGray-850"
            onClick={handleClose}
          >
            취소
          </button>
        )}
      </div>
    </div>
  );
}
