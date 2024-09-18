import { ToastContainer, toast } from 'react-toastify';
import {db} from "../Firebase/firebaseConfig"
import {collection, addDoc} from "firebase/firestore"
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';  
import { data } from 'autoprefixer';

const Form = () => {

    const {register, handleSubmit,reset,  formState: {errors}} = useForm();

    const onSubmit = async(data)=>{
        try{
            const docRef= await addDoc(collection(db,"reservations"),data);
            console.log(docRef.id);
            reset();
            toast.success("votre reservation a bien ete enregistre")

        }catch(error){
            console.error("une erreur est survenue", error)
            toast.error('une erreur alerte rouge')
        }
    }

  return (
    <div className="max-w-[400px] w-full bg-white p-6 rounded-md shadow-md">
        <h1 className="text-4xl mb font-bold uppercase text-amber-600"> Reservations</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-4">
                <label htmlFor="firstName" className="block">Prenom</label>
                <input {...register("firstName", {required: "Ce champ est requis"})} id='firstName' type="text" className="outline-none form-input mt-1 block w-full border-b border-b-gray-300" />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>} 
            </div>
            <div className="mb-4">
                <label htmlFor="lastName" className="block">Nom</label>
                <input {...register("lastName", {required: "Ce champ est requis"})} id='lastName' type="text" className="outline-none form-input mt-1 block w-full border-b border-b-gray-300" />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>} 
            </div>
            <div className="mb-4">
                <label htmlFor="Email" className="block">Email</label>
                <input {...register("Email", {required: "Ce champ est requis", pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Adresse Email invalide"}})} id='Email' type="email" className="outline-none form-input mt-1 block w-full border-b border-b-gray-300" />
                {errors.Email && <p className="text-red-500 text-sm">{errors.Email.message}</p>} 
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block">Telephone</label>
                <input {...register("phone", {required: "Ce champ est requis", pattern:{value:/^\d{10}$/, message: "Numero invalide"}})} id='phone' type="phone" className="outline-none form-input mt-1 block w-full border-b border-b-gray-300" />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>} 
            </div>
            <div className="mb-4">
                <label htmlFor="date" className="block">Date du Rendez-vous</label>
                <input {...register("date", {required: "Ce champ est requis"})} id='date' type="date" className="border border-gray-300 p-3 rounded-md outline-none form-input mt-1 block w-full border-b border-b-gray-300" />
                {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>} 
            </div>
            <div className="mb-4">
                <label htmlFor="time" className="block">Heure du Rendez-vous</label>
                <input {...register("time", {required: "Ce champ est requis"})} id='time' type="time" className="border border-gray-300 p-3 rounded-md outline-none form-input mt-1 block w-full border-b border-b-gray-300" />
                {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>} 
            </div>

            <div className="mt-4">
                <button type='submit' className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-md">Réserver</button>
            </div>
            
        </form>
        <ToastContainer />
    </div>
  )
}

export default Form
