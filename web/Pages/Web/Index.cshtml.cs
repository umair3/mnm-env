using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using web.Data;

namespace web.Pages_Web
{
    public class IndexModel : PageModel
    {
        private readonly web.Data.WebContext _context;

        public IndexModel(web.Data.WebContext context)
        {
            _context = context;
        }

        public IList<Approval> Approval { get;set; } = default!;

        public async Task OnGetAsync()
        {
            Approval = await _context.Approval.ToListAsync();
        }
    }
}
