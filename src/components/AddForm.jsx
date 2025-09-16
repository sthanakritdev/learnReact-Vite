import { useState } from "react";

function AddForm(props) {

    const {data,setData} = props
    const [name,setName] = useState("")
    const [gender,setGender] = useState("")

    function saveData(e) {
        e.preventDefault()
        console.log(name,gender)

        const person = {
            id: data.length+1 ,
            name: name,
            gender : gender,
        }
        console.log(person)
        setData([...data,person])
        setName("")
        setGender("")
    }
    return(
        <>
        <section>
        <form onSubmit={saveData}>
            <label>ชื่อ</label><input type="text" name="name"  id="name"  value={name} onChange={(e)=> setName(e.target.value)}/>
            <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value=""></option>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
            </select>
            <button type="submit" className="btn-save" disabled={name.trim() === "" || gender.trim() === ""}>บันทึก</button>
        </form>
        </section>
        </>
    );
    
}

export default AddForm;