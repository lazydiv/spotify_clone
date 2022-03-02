import { getProviders, signIn } from "next-auth/react";


function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen wid-full justify-center">
      <img className='w-52 mb-5' src="https://links.papareact.com/9xl" alt="spotify icon" />
      
      {Object.values(providers).map((provider) => (
        <div>
          <button className="bg-[#18dB60] text-white p-5 rounded-full"
          onClick={() => signIn(provider.id, { callbackUrl: "/"})}
          >
            Login  {provider.name}</button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };

}