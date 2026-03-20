import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CloudRain, TrendingDown } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import RainEffect from '../components/RainEffect';
import './ProblemSection.css';

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="section problem-section" ref={ref} id="problem">
      <RainEffect intensity={25} />

      <motion.div
        className="problem-content"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="problem-icon"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <CloudRain size={48} color="var(--cyan)" />
        </motion.div>

        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
          When it rains, <span className="gradient-text">Arjun loses.</span>
        </h2>

        <div className="problem-story">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Arjun delivers for Swiggy in Chennai. Heavy rain means cancelled orders, 
            dangerous roads, and zero earnings — but his rent doesn't wait.
          </motion.p>
        </div>

        {/* Income loss animation */}
        <motion.div
          className="income-loss-card glass"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="income-header">
            <TrendingDown size={20} color="var(--red)" />
            <span>Today's Earnings</span>
          </div>
          <div className="income-amount" style={{ color: 'var(--red)' }}>
            ₹<AnimatedCounter from={1100} to={inView ? 0 : 1100} duration={2.5} trigger={inView} />
          </div>
          <div className="income-label">Lost to weather disruption</div>
          <motion.div
            className="income-bar"
            initial={{ width: '100%' }}
            animate={inView ? { width: '0%' } : {}}
            transition={{ delay: 0.8, duration: 2.5, ease: 'easeOut' }}
          />
        </motion.div>

        <motion.p
          className="problem-stat"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
        >
          <span style={{ color: 'var(--amber)', fontWeight: 700, fontSize: '1.4rem' }}>7.5M+</span>
          <br />
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            gig workers in India face this every monsoon season
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
}
