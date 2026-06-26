

function ThongBaoLoi({ loi }) {
  if (!loi) return null;
  return <p className="text-red-500 text-sm mt-1">{loi}</p>
}

export default ThongBaoLoi;