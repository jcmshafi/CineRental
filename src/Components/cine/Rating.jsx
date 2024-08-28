import Star from '../../assets/star.svg';

const Rating = ({value}) => {
    const starts =Array(value).fill(Star)
    return (
        <>
            {
                starts.map((star, indext) => (
                    <img 
                    key ={indext}
                    src={star} 
                    width="14" 
                    height="14" 
                    alt="star" />
                )
            )  
                
            }
        </>
    );
};

export default Rating;