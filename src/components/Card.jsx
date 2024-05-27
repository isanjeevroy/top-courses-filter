import React from 'react'
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

function Card({course,likedCourses,setLikedCourses}) {

    function clickhandler (){
        if(likedCourses.includes(course.id)){
            setLikedCourses( (prev)=>prev.filter(
            (cid)=>( cid !== course.id)));
            toast.warning("Like removed"); 
        }else{
            if(likedCourses.length ===0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Course Liked")
        }
    }

    return (
        <div className='mb-6 mt-2'>
           <div className='w-48'>
                <img src={course.image.url} alt="" />
           </div>

           <div>
            <button onClick={clickhandler}>
                 {
                    likedCourses.includes(course.id)? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>
                 }
            </button>
           </div>

            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>
        </div>
    )
}

export default Card