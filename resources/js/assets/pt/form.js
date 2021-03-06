export const text = {
    close: "cancelar",
    pages: [
        {
            title: "Explora as nossas atividades e reserva a tua experiência na Ilha da Madeira!",
            warning: "Atividades privadas de canyoning, caminhadas, passeios de bicicleta e coasteering são 120€",
            form: {
                name: {
                    placeholder: "Nome *"
                },
                email: {
                    placeholder: "Email *"
                },
                phone: {
                    placeholder: "Número telemóvel *"
                },
                indicative: {
                    placeholder: "+351"
                },
                address: {
                    placeholder: "Morada de recolha *"
                },
                activity: {
                    placeholder: "Atividade *"
                },
                private: {
                    placeholder: "Experiência privada",
                },
                participants: {
                    placeholder: "Número de participantes *",
                },
            },
        },
        {
            title: "Seleciona a data para a tua atividade das que estão disponíveis no calendário"
        },
        {
            title: "Preencha os detalhes de todos os que irão participar na atividade",
            subtitle: "Participante",
            form: {
                person: {
                    bday: {
                        placeholder: "Aniversário *"
                    },
                    gender: {
                        placeholder: "Sexo *",
                        options: [
                            "masculino", "feminino"
                        ],
                    },
                    height: {
                        placeholder: "Altura *"
                    },
                    weight: {
                        placeholder: "Peso *"
                    },
                    shoe: {
                        placeholder: "Tamanho sapato *"
                    },
                },
            },
        },
        {
            title: "Detalhes da reserva",
            participantsTitle: "Detalhes dos participantes",
            details: {
                activity: "Atividade",
                name: "Nome da reserva",
                email: "Email",
                phone: "Nº de telemóvel",
                address: "Morada",
                private: "Experiência privada",
                privateAnswer: ['Não', 'Sim'],
                date: "Data da atividade",
                created_at: "Data da reserva",
                participant: "Participante",
                participants: "Nº de participantes",
                price: "Preço"
            },
        }
    ],
    submit: "RESERVAR",
    success: {
        message: "A sua reserva foi iniciada!",
        description: "Obrigado pro se juntar a nós. Por favor confirme a reserva no seu email"
    },
    error: {
        message: "Ocorreu um erro inesperado",
    }
} 