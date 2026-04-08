type SpinLoaderProps = {
    containerClasses?: string
}


export default function SpinLoader({} : SpinLoaderProps){
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="h-10 w-10 border-5 border-t-transparent border-slate-900 rounded-full animate-spin">

            </div>
        </div>
    )
}