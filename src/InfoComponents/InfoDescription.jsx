function InfoDescription({ description }) {
    const veta = description.split('. ');

    const odstavec = [];
    for (let i = 0; i < veta.length; i += 3) {
        odstavec.push(veta.slice(i, i + 3).join('. '));
    }

    return (
        <div className="w-10/12 h-[50vh] mt-[4%] overflow-y-auto scroll-container">
            {odstavec.map((odstavec, index) => (
                <span key={index} className="text-base text-white font-normal font-mont">
                    {odstavec}
                    <br/>
                    <br/>
                </span>
            ))}
        </div>
    );
}

export default InfoDescription;