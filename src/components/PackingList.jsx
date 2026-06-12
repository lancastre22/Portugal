export default function PackingList({ list }) {
  return (
    <section className="packing">
      <div className="packing__header">
        <span className="packing__icon">🎒</span>
        <div>
          <h2 className="packing__name">{list.title}</h2>
          {list.note && <p className="packing__note">{list.note}</p>}
        </div>
      </div>
      <div className="packing__line" />
      <div className="packing__groups">
        {list.groups.map((group) => (
          <div className="packing-group" key={group.name}>
            <div className="packing-group__title">
              <span>{group.emoji}</span> {group.name}
            </div>
            <ul className="packing-group__items">
              {group.items.map((item) => (
                <li
                  key={item.label}
                  className={item.got ? 'pack-item pack-item--got' : 'pack-item'}
                >
                  <span className="pack-item__box">{item.got ? '✅' : '⬜'}</span>
                  <span className="pack-item__label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
