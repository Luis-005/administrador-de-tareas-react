import './ContainerTasks.css'

export const ContainerTasks = ({children}) =>{

    return(
        <section className='blockTasks'>
             <ul className='container-task'>
                {children}
            </ul> 
        </section>
    )
}
