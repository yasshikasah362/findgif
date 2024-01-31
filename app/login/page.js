'use client'
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { auth } from '@/app/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';



const LoginUp = () => {
    const router = useRouter();
    const lemailRef = useRef();
    const lpasswordRef = useRef();

    const handleLoginUp = async (e) => {
        e.preventDefault();
        const email = lemailRef.current.value;
        const password = lpasswordRef.current.value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);

            // Navigate to the '/list' page after successful login
            router.push('/list');
        } catch (error) {
            const errorMessage = error.message;
            alert(errorMessage);
        }
    };

    return (
        <>
            {/* Header */}
            <div style={{ height: '12%', width: '100%', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '50px' }}>
                <img style={{ height: '100%', width: '15%' }} src="https://images.squarespace-cdn.com/content/v1/566c552269a91af72b314d9c/1487647150282-3SCUC6X1TXR9QQQ3FZ6O/image-asset.jpeg?format=1500w" alt="" />
            </div>

            {/* Login Form */}
            <div style={{ backgroundColor: '#6C55F8', height: '100vh', width: '100vw' }}>
                <div className="container pt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title text-center mb-4">Login Your Account</h1>
                                    <form onSubmit={handleLoginUp}>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" required placeholder="Enter Your Email" ref={lemailRef} />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" className="form-control" required placeholder="Enter Your Password" ref={lpasswordRef} />
                                        </div>
                                        {/* Use a regular button for form submission */}
                                        <button type="submit" className="btn btn-primary btn-block">LoginUp</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginUp;
