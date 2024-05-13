// services.js
import { db } from '../fierbase-config';
import { collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore';
import { auth } from '../fierbase-config';

const portfolioCollectionRef = collection(db, "portfolios");

export const portfolioService = {
  getAllPortfolios: async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("User not authenticated");
      }
      const userCollectionRef = collection(db, 'users', user.uid, 'portfolios');
      const querySnapshot = await getDocs(userCollectionRef);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching portfolios:', error);
      throw error;
    }
  },
  addPortfolio: async (portfolioData) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("User not authenticated");
      }

      const userCollectionRef = collection(db, 'users', user.uid, 'portfolios');
      const docRef = await addDoc(userCollectionRef, portfolioData);
      return docRef;
    } catch (error) {
      console.error('Error adding portfolio:', error);
      throw error;
    }
  },
  getPortfolioById: async (id) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error("User not authenticated");
      }
      const userRef = doc(db, 'users', user.uid);
      const portfolioRef = doc(userRef, 'userIds', user.uid, 'portfolios', id);
      const docSnap = await getDoc(portfolioRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        throw new Error("Portfolio not found");
      }
    } catch (error) {
      console.error("Error fetching portfolio:", error);
      throw error;
    }
  },
};

export { db };
export default portfolioService;
