import React, { useState } from 'react';
import './form.css';

const Form1 = () => {
    const [show , setShow] = useState(false)
    const [data , setData] = useState({
        name:'',lastname:'', message:'',number:'', email:'',
    })
    const [info, setInfo] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault()
        setInfo(`hi i'm ${data.name} and my father name is ${data.lastname}`)
        setData({ name:'',lastname:'', message:'',number:'', email:'',})
        setShow(!show)
    }
    // const getMessages = async () =>{
    //     const options = {
    //        method:'POST',
    //        body: JSON.stringify({
    //         message: value
    //        }),
    //        headers:{
    //         "Content-Type" : "application/json"
    //        }
    //     }
    //     try {
    //       const response= await fetch('http://localhost:3000/completion', options);
    //       const data = await response.json()
    //     //   setMessage(data.choices[0].message)
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
  return (
    <div className='form'>
    <h1>Enter Info..</h1>
    <div className='form_content'>
        <form>
            <label >Over thee last two weeks, how often have you experienced little interest or pleasure in doing things?</label>
            <input type='text' value={data.name} onChange={(e)=> setData({...data, name:e.target.value})} />
            <label >Over the last two weeks , how often have you feel nervous, anxious or an edge?</label>
            <input type='text' value={data.lastname} onChange={(e)=> setData({...data, lastname:e.target.value})}/>
            <label >In last 30 days, how often did you feel tired for no good reason?</label>
            <input type='text' value={data.message} onChange={(e)=> setData({...data, message:e.target.value})} />
            <label >How often do you have drink containing alchol?</label>
            <input type='text' value={data.email} onChange={(e)=> setData({...data, email:e.target.value})} />
            <label >How often in the last month have you felt close to panic or experienced a panic attack?</label>
            <input type='text' value={data.number} onChange={(e)=> setData({...data, number:e.target.value})}/>
            <button onClick={handleSubmit}>Submit</button>
            
        </form>
        {
            show && (
                <div className='suggestion'>
                    <h1>Suggestions</h1>
                    <p>I'm sorry to hear that you're feeling tired and concerned about your mental health. While I can provide some general guidance, it's important to remember that I am an AI language model and not a medical professional. It would be best to consult with your doctor or a healthcare provider for a proper evaluation and personalized advice. They will be able to assess your situation accurately and provide appropriate recommendations. However, I can certainly assist you with some suggestions for activities and food options in Auckland.
Activities to Improve Mental Health in Auckland:
Nature Walks: Auckland has several beautiful parks and trails where you can take a leisurely walk or engage in more vigorous hikes. Some popular options include the Waitakere Ranges, Mount Eden, and Cornwall Park.
Exercise Classes: Joining exercise classes or groups can not only help you stay active but also provide a sense of community. Look for yoga classes, dance sessions, or fitness groups in your area.
Art and Craft Workshops: Engaging in creative activities can be therapeutic. Check for art workshops or craft classes that you can participate in, such as painting, pottery, or photography.
Support Groups: If you're struggling with mental health, joining a support group can provide a space to share your experiences and connect with others who may be going through similar challenges. Search for local mental health support groups in Auckland.
Volunteer Work: Giving back to the community can give you a sense of purpose and fulfillment. Look for volunteer opportunities in your area that align with your interests.</p>
                </div>
            )
        }
    </div>
  
</div>
  )
}

export default Form1
