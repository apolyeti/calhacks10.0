import Hero from "@components/Hero"
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Home() : NextPage {
    const router = useRouter();
    const toast = useToast();
    useEffect(() => {
      if (router.query.login === 'false') {
        toast({
          title: "Login failed",
          description: "Please try again",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        const { pathname, query } = router;
        delete query.login;
        router.replace({ pathname, query }, undefined, { shallow: true });
      }
    }, [router.query.login]);

    return (
      <>
      <Hero />
      </>
    );
}
  
