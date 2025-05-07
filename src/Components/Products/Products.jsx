import React, { useState, useEffect, useRef } from 'react';
import products from '../../Products/Products';

function Products() {
    const [currentImageIndex, setCurrentImageIndex] = useState({});
    const [isHovering, setIsHovering] = useState({});
    const intervalRefs = useRef({});

    const handleImageChange = (productIndex) => {
        setCurrentImageIndex((prev) => {
            const nextIndex = ((prev[productIndex] || 0) + 1) % products[productIndex].images.length;
            return { ...prev, [productIndex]: nextIndex };
        });
    };

    useEffect(() => {
        return () => {
            Object.values(intervalRefs.current).forEach(interval => {
                if (interval) clearInterval(interval);
            });
        };
    }, []);

    useEffect(() => {
        Object.keys(isHovering).forEach(productIndex => {
            if (isHovering[productIndex]) {
                if (intervalRefs.current[productIndex]) {
                    clearInterval(intervalRefs.current[productIndex]);
                }
                intervalRefs.current[productIndex] = setInterval(() => {
                    handleImageChange(parseInt(productIndex));
                }, 1000);
            } else if (intervalRefs.current[productIndex]) {
                clearInterval(intervalRefs.current[productIndex]);
                delete intervalRefs.current[productIndex];
            }
        });
    }, [isHovering]);

    const handleMouseEnter = (index) => {
        setIsHovering(prev => ({ ...prev, [index]: true }));
    };

    const handleMouseLeave = (index) => {
        setIsHovering(prev => ({ ...prev, [index]: false }));
        setCurrentImageIndex(prev => ({ ...prev, [index]: 0 }));
    };

    return (
        <div className="flex flex-wrap justify-center gap-6 p-6 mt-20 bg-gray-100 dark:bg-gray-900 min-h-screen">
            {products.map((product, index) => (
                <div
                    key={index}
                    className="w-[20rem] h-[22rem] rounded-xl overflow-hidden relative text-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    <div className="w-full h-4/5 overflow-hidden relative">
                        <div className="relative w-full h-full">
                            {product.images.map((image, imgIndex) => (
                                <img
                                    src={image}
                                    alt={`${product.name} ${imgIndex + 1}`}
                                    key={imgIndex}
                                    loading="lazy"
                                    decoding="async"
                                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                                        (currentImageIndex[index] || 0) === imgIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Slider indicator dots */}
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                            {product.images.map((_, imgIndex) => (
                                <div
                                    key={imgIndex}
                                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                        (currentImageIndex[index] || 0) === imgIndex
                                            ? 'bg-blue-500 dark:bg-blue-400 scale-125'
                                            : 'bg-gray-300 dark:bg-gray-600'
                                    }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-gray-800 dark:text-gray-200">{product.name}</h3>
                </div>
            ))}
        </div>
    );
}

export default Products;
