// フォームで使用するテキストフィールド用のコンポーネント
export const TextField = ({ label, multiline, placeholder, fieldName }) => {
  return (
    <div className="mb-8">
      <label className="block px-4 text-base font-bold">{label}</label>
      {/* 1行テキストか複数行テキストかで切り替えられるように */}
      {multiline ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          fieldName={fieldName}
          className="w-full border px-4 py-2"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          fieldName={fieldName}
          className="w-full border px-4 py-2"
        />
      )}
    </div>
  );
};
