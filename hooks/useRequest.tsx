import { useEffect, useState } from "react";



const useRequest = (url: string | undefined, method: string = 'GET', body: any = null) => {
  const [data, setData] = useState<any | null>(null);


  useEffect(() => {
    if (!url) {
      return;
    }
  


    const fetchData = async () => {  
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(url, {
          method,
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: body ? JSON.stringify(body) : null
        });
        const result = await response.json();

        if (response.ok) {
          setData(result);
        } else {
          // handle error
        }
      } catch (err) {
        console.log(err)
        // handle error
      }
    };

    fetchData();
  }, [url, method, body]);

  return data;
};

export default useRequest;