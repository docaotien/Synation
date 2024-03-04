"use client"

import * as z from "zod"
import axios from "axios"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { useRouter } from "next/router"
import { Form,
          FormControl,
          FormDescription,
          FormField,
          FormLabel,
          FormMessage } from "@/components/ui/form"

const CateItem = () => {
          const form = useForm(
          return ( 
                    <div>
                              <h1>Categories Page</h1>
                    </div>
           );
}
 
export default CateItem;