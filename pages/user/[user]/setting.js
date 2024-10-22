import { useRouter } from "next/router";

const setting = () => {
    const router = useRouter();  
    console.log(router);
    
    return(
        <>
            <h3>Hello this is { router.query.user } pages</h3>
        </>
    );
};

export default setting;