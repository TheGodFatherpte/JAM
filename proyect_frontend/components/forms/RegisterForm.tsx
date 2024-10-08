"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomForm from "../CustomForm"

export enum FormFieldType {
    INPUT = "input",
    DATE_PICKER = "datePicker",
    PHONE_INPUT = "phoneInput",
    SELECT = "select",
    TEXTAREA = "textarea",
    CHECKBOX = "checkbox",
    SKELETON = "skeleton",
}

const formSchema = z.object({
    username: z.string().min(2, {
        message: "El usuario debe de tener al menos 2 caracteres.",
    }),
})

const RegisterForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <section className="mb-12 space-y-4">
                    <h1 className="header"> Hola👋</h1>
                    <p className="text-dark-700">Pide tu primera cita </p>
                </section>
                <CustomForm
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="name"
                    label="Nombre completo"
                    placeholder="Johny Perez"
                    iconSrc="/assets/icons/userIcon.svg"
                    iconAlt="user"
                />

                <CustomForm
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="email"
                    label="Email"
                    placeholder="johny@email.com"
                    iconSrc="/assets/icons/emailIcon.svg"
                    iconAlt="email"
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default RegisterForm