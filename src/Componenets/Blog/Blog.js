import React from 'react';

const Blog = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <p>What’s new?</p>
                    <p>Our blog and news</p>
                </div>
                <div  className="col-md-8">
                    <div className="d-flex justify-content-center">
                        <p className="m-5">Jan 06 Blog<hr /></p>
                        <p className="m-5">24,895 hours later<hr /></p>
                        <p className="btn m-5">Read more<hr /></p>
                        
                    </div>
                    <div  className="d-flex justify-content-center">
                        <p className="m-5">Jan 06 Blog<hr /></p>
                        <p className="m-5">24,895 hours later<hr /></p>
                        <p className="btn m-5">Read more<hr /></p>
                        
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className="m-5">Jan 06 Blog<hr /></p>
                        <p className="m-5">24,895 hours later<hr /></p>
                        <p className="btn m-5">Read more<hr /></p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;