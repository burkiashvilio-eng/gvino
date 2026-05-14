interface Props {
  style?: React.CSSProperties;
}

export default function Divider({ style }: Props) {
  return (
    <div className="divider" style={style}>
      <div className="dl" />
      <span style={{ color: 'var(--gold)' }}>✦</span>
      <div className="dl r" />
    </div>
  );
}
