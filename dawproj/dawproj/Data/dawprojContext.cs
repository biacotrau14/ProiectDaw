using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace dawproj.Models
{
    public class dawprojContext : DbContext
    {
        public dawprojContext (DbContextOptions<dawprojContext> options)
            : base(options)
        {
        }

        public DbSet<dawproj.Models.Movie> Movie { get; set; }
    }
}
