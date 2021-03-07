import React, {useForm} from 'react'

export default function Searchbar() {
    const [register, handleSubmit] = useForm(null)

    const submit = (data) => {
        window.addEventListener('click',e => {
            e.preventDefault()
        })

        console.log(data)
    }

    return (
        <div>
            <input ref={register} type="text" name="pokename" id="pokename"/>
            <a href="#" onClick={handleSubmit(submit)}></a>
        </div>
    )
}