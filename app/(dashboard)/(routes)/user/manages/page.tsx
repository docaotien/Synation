import { Button } from "@/components/ui/button";
import  Link from "next/link";

const ManagesPage = () => {
          return ( 
                    <Link href="/user/categories">
                              <div>
                                        <h1>Manages Page</h1>
                                        <Button>
                                                  Categories
                                        </Button>
                              </div>
                    </Link>
           );
}
 
export default ManagesPage;