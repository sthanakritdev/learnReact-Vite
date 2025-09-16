import boy from '../assets/boy.svg'
import girl from '../assets/girl.svg'

export default function User({item,deletePerson}) {
  return (
    <>
      <li key={item.id}>
        <img src={item.gender == "ชาย" ? boy : girl} width={30} height={30} />
        ชื่อ : {item.name}<button onClick={() => deletePerson(item.id)}>ลบ</button>
      </li>
    </>
  );
}
