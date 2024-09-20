import React from 'react'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function LogInForm({onLogin}) {

  const schema = z.object({
    username : z.string().regex(/^[a-zA-Z0-9_]+$/),
    passowrd : z.string().min(8)
  })

  const 
  return (
    <div>LogInForm</div>
  )
}

export default LogInForm