import PropTypes from 'prop-types';

export function ErrorComponent({ error, resetErrorBoundary }) {
    console.log(error);
    
    return <div className="w-h-inherit flex justify-center items-center">
        <div role="alert" className='flex flex-col gap-2'>
            <p>Something went wrong:</p>
            <pre style={{ color: "red" }}>ERROR: {error.message || error}</pre>
            <button
            className='w-fit px-3 py-1 bg-slate-950'
             onClick={() => {
                resetErrorBoundary()
                console.clear()
            }}>Reset</button>
        </div>
    </div>
}

ErrorComponent.propTypes = {
    error: PropTypes.object.isRequired,
    resetErrorBoundary: PropTypes.func.isRequired,
};