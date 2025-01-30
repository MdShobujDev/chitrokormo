const Description = () => {
  return (
    <div className=" flex flex-col gap-3">
      <p className=" sm:text-sm text-xs text-gray-700">{`ইসলামিক ওয়ালবোর্ড একটি দেয়াল সজ্জার উপকরণ, যা ইসলামিক ক্যালিগ্রাফি, কোরআনের আয়াত, হাদিস বা দোয়ার অংশ দিয়ে সাজানো থাকে। এটি ঘরের পরিবেশকে আধ্যাত্মিক ও শান্তিময় করতে সাহায্য করে এবং ইসলামিক শিক্ষার প্রতি একটি ইতিবাচক স্মরণ করিয়ে দেয়। বিভিন্ন ডিজাইন ও আকারে এটি বাজারে সহজলভ্য।`}</p>
      <div className=" flex gap-5 flex-wrap">
        <div>
          <h2 className=" text-base sm:text-lg font-medium">Features</h2>
          <ul className="list-disc pl-5  font-light sm:text-base text-xs">
            <li> আধ্যাত্মিক পরিবেশ তৈরি করে।</li>
            <li>উন্নতমানের টেকসই উপকরণ।</li>
            <li>বিভিন্ন আকর্ষণীয় ডিজাইন ও আকার।</li>
            <li>সহজে দেয়ালে স্থাপনযোগ্য।</li>
            <li>ইসলামিক শিক্ষা ও দোয়ার স্মারক।</li>
          </ul>
        </div>
        <div>
          <h2 className="  text-base sm:text-lg font-medium">Materials Care</h2>
          <ul className="list-disc pl-5 font-light sm:text-base text-xs">
            <li>নরম কাপড় দিয়ে ধুলা পরিষ্কার করুন।</li>
            <li>পানির সংস্পর্শ এড়িয়ে চলুন।</li>
            <li>সরাসরি রোদে রাখবেন না।</li>
            <li>মজবুত হুক দিয়ে দেয়ালে ঝুলান।</li>
            <li>রাসায়নিক ক্লিনার ব্যবহার করবেন না।</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
